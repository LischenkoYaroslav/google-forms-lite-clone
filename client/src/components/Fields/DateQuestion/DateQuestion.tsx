import type { Question } from "@/generated/graphql";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface DateQuestionProps {
  question: Question;
}

export const DateQuestion = ({ question }: DateQuestionProps) => {
  const { register } = useFormContext();

  return (
    <TextField
      type="date"
      variant="filled"
      fullWidth
      InputLabelProps={{ shrink: true }}
      {...register(question.id)}
    />
  );
};