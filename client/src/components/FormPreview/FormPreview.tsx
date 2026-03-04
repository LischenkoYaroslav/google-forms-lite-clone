import type { Form } from "@/generated/graphql";
import { Box, Button, Typography } from "@mui/material";
import styles from "./FormPreview.styles";
import { Link } from "react-router-dom";

interface FormPreviewProps {
  form: Form;
}

export const FormPreview = ({ form }: FormPreviewProps) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.infoContainer}>
        <Box sx={styles.info}>
          <Typography variant="h5">{form.title}</Typography>
          <Typography variant="body1">{form.description}</Typography>
        </Box>
        <Box sx={styles.controls}>
          <Typography variant="h6">
            Questions: {form.questions.length}
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.controlsContainer}>
        <Link to={`/forms/${form.id}/fill`}>
          <Button variant="contained">Leave Response</Button>
        </Link>
        <Link to={`/forms/${form.id}/responses`}>
          <Button variant="contained">View Responses</Button>
        </Link>
      </Box>
    </Box>
  );
};
