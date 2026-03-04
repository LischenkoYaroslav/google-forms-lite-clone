import type { Response } from "@/generated/graphql";
import { Box, Typography } from "@mui/material";
import styles from "./ResponsePreview.styles";
import { AnswerWithQuestion } from "@/components/AnswerWithQuestion/AnswerWithQuestion";

interface ResponsePreviewProps {
  response: Response;
  index?: number;
}

export const ResponsePreview = ({ response, index }: ResponsePreviewProps) => {
  const answers = response.answers || [];
  if (answers.length === 0) return null;
  return (
    <Box sx={styles.container}>
      <Typography variant="h6">Response {index}</Typography>
      {answers.map((answer) => (
        <AnswerWithQuestion key={answer.id} answer={answer} />
      ))}
    </Box>
  );
};
