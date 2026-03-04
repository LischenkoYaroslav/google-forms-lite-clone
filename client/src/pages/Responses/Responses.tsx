import { Box, Typography } from "@mui/material";
import {
  useGetFormByIdQuery,
  useGetResponsesByFormIdQuery,
} from "@/api/formsLiteApi";
import styles from "./Responses.styles";
import { FormResponses } from "@/components/FormResponses/FormResponses";
import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";

export const Responses = () => {
  const { formId } = useParams<{ formId: string }>();
  const { data: form } = useGetFormByIdQuery(formId ?? skipToken);
  const { data: responses, isLoading } = useGetResponsesByFormIdQuery(
    formId ?? skipToken,
  );
  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={styles.title}>
        Responses
      </Typography>
      {isLoading && <p>Loading...</p>}
      {responses && <FormResponses responses={responses} form={form} />}
    </Box>
  );
};
