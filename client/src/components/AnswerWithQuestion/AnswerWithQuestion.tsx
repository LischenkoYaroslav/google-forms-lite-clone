import type { Answer } from "@/generated/graphql";
import { Typography, Box } from "@mui/material";
import styles from "./AnswerWithQuestion.styles";

interface AnswerWithQuestionProps {
  answer: Answer;
}

export const AnswerWithQuestion = ({ answer }: AnswerWithQuestionProps) => {
  return (
    <>
      <Box sx={styles.container}>
        <Typography variant="body2">{answer.question?.text}</Typography>
        <Typography variant="body1">
          {answer.value || "No answer provided"}
        </Typography>
      </Box>
    </>
  );
};
