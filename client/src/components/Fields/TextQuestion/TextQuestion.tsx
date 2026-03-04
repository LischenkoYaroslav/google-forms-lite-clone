import type { Question } from "@/generated/graphql";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface TextQuestionProps {
  question: Question;
}

export const TextQuestion = ({ question }: TextQuestionProps) => {
  const { register } = useFormContext();
  return (
    <TextField
      label={question.text}
      variant="filled"
      fullWidth
      {...register(question.id)}
    />
  );
};
