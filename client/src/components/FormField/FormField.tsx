import type { Question, QuestionType } from "@/generated/graphql";
import { TextQuestion } from "@/components/Fields/TextQuestion/TextQuestion";
import { MultipleChoiceQuestion } from "@/components/Fields/MultipleChoiceQuestion/MultipleChoiceQuestion";
import { CheckboxQuestion } from "@/components/Fields/CheckboxQuestion/CheckboxQuestion";
import { DateQuestion } from "@/components/Fields/DateQuestion/DateQuestion";
import { Box, Typography } from "@mui/material";
import styles from "./FormField.styles";

interface FormFieldProps {
  question: Question;
}

export const FormField = ({ question }: FormFieldProps) => {
  const componentMap: Record<QuestionType, React.FC<{ question: Question }>> = {
    TEXT: TextQuestion,
    MULTIPLE_CHOICE: MultipleChoiceQuestion,
    CHECKBOX: CheckboxQuestion,
    DATE: DateQuestion,
  };
  const Component = componentMap[question.type];
  return (
    <Box sx={styles.questionContainer}>
      <Typography variant="h6">{question.text}</Typography>
      <Component question={question} />
    </Box>
  );
};
