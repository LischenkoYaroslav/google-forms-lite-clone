import { Box, Button, TextField, Typography } from "@mui/material";
import styles from "./FormBuilder.styles";
import { useCreateFormMutation } from "@/api/formsLiteApi";
import type { QuestionInput } from "@/generated/graphql";
import { useState } from "react";
import { QuestionEditor } from "@/components/QuestionEditor/QuestionEditor";

export const FormBuilder = () => {
  const [createForm, { isLoading: isSubmitting }] = useCreateFormMutation();
  const [questions, setQuestions] = useState<QuestionInput[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        text: "",
        type: "TEXT",
        options: [],
      },
    ]);
  };

  const updateQuestion = (index: number, updated: QuestionInput) => {
    setQuestions((prev) => {
      const copy = [...prev];
      copy[index] = updated;
      return copy;
    });
  };

  const handleCreateForm = async () => {
    try {
      await createForm({ title, description, questions }).unwrap();
      alert("Form created successfully!");
    } catch (err) {
      console.error("Create form failed:", err);
    }
  };

  return (
    <>
      <Typography variant="h4" sx={styles.title}>
        Create your form here!
      </Typography>
      <Box sx={styles.container}>
        <TextField
          label="Form Title*"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Form Description"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {questions.map((q, index) => (
          <QuestionEditor
            key={index}
            question={q}
            onChange={(updated) => updateQuestion(index, updated)}
          />
        ))}
        <Button variant="contained" onClick={addQuestion}>
          +
        </Button>
        <Button
          variant="contained"
          disabled={isSubmitting}
          sx={styles.submitBtn}
          onClick={handleCreateForm}
        >
          {isSubmitting ? "Creating..." : "Create Form"}
        </Button>
      </Box>
    </>
  );
};
