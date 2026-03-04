import { Box, Typography } from "@mui/material";
import { useGetFormsQuery } from "@/api/formsLiteApi";
import { FormPreview } from "@/components/FormPreview/FormPreview";
import styles from "./Home.styles";

export const Home = () => {
  const { data: forms, isLoading } = useGetFormsQuery();

  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={styles.title}>
        Forms List
      </Typography>
      {isLoading && <p>Loading...</p>}
      {forms && forms.map((form) => <FormPreview key={form.id} form={form} />)}
    </Box>
  );
};
