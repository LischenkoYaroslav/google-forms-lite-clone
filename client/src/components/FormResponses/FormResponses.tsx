import type { Form, Response } from "@/generated/graphql";
import { Box, Typography } from "@mui/material";
import styles from "./FormResponses.styles";
import { ResponsePreview } from "@/components/ResponsePreview/ResponsePreview";

interface FormResponsesProps {
  responses: Response[];
  form: Form | undefined;
}

export const FormResponses = ({ responses, form }: FormResponsesProps) => {
  const formTitle = form?.title || "Untitled Form";
  const formDescription = form?.description || "No description available";
  return (
    <Box sx={styles.container}>
      <Typography variant="h4">{formTitle}</Typography>
      <Typography variant="body1">{formDescription}</Typography>
      {responses.length === 0 && <Typography>No responses yet.</Typography>}
      {responses.map((response, index) => (
        <ResponsePreview
          response={response}
          key={response.id}
          index={index + 1}
        />
      ))}
    </Box>
  );
};
