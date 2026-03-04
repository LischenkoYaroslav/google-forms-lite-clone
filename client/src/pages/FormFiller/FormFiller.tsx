import {
  useGetFormByIdQuery,
  useSubmitResponseMutation,
} from "@/api/formsLiteApi";
import styles from "./FormFiller.styles";
import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";
import { Box, Button, Typography } from "@mui/material";
import { FormField } from "@/components/FormField/FormField";
import { useForm, FormProvider } from "react-hook-form";

type FormValues = Record<string, string>;

export const FormFiller = () => {
  const { id } = useParams<{ id: string }>();
  const { data: form, isLoading } = useGetFormByIdQuery(id ?? skipToken);
  const methods = useForm();
  const [submitResponse, { isLoading: isSubmitting }] =
    useSubmitResponseMutation();

  const onSubmit = async (data: FormValues) => {
    try {
      const answers = Object.entries(data).map(([questionId, value]) => ({
        questionId,
        value: Array.isArray(value) ? value.join(", ") : value,
      }));
      await submitResponse({ formId: id!, answers }).unwrap();
      alert("Response submitted successfully!");
      methods.reset();
    } catch (err) {
      console.error("Submit failed:", err);
    }
  };

  return (
    <FormProvider {...methods}>
      <Box sx={styles.container}>
        <Typography variant="h4" sx={styles.title}>
          Please fill the form below
        </Typography>
        {isLoading && <p>Loading...</p>}
        <Box
          component="form"
          onSubmit={methods.handleSubmit(onSubmit)}
          sx={styles.formContainer}
        >
          {form && (
            <>
              <Typography variant="h4">{form.title}</Typography>
              <Typography variant="body1">{form.description}</Typography>
            </>
          )}
          {form &&
            form.questions.length > 0 &&
            form.questions.map((question) => (
              <FormField question={question} key={question.id} />
            ))}
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            sx={styles.submitBtn}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};
