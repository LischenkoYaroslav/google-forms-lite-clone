import type { QuestionInput, QuestionType } from "@/generated/graphql";
import { Box, MenuItem, Select, TextField } from "@mui/material";
import { OptionsEditor } from "../OptionsEditor/OptionsEditor";
import styles from "./QuestionEditor.styles";

type Props = {
  question: QuestionInput;
  onChange: (q: QuestionInput) => void;
};

export const QuestionEditor = ({ question, onChange }: Props) => {
  const update = (patch: Partial<QuestionInput>) =>
    onChange({ ...question, ...patch });

  return (
    <Box sx={styles.container}>
      <TextField
        label="Question*"
        value={question.text}
        onChange={(e) => update({ text: e.target.value })}
        fullWidth
      />

      <Select
        value={question.type}
        onChange={(e) => update({ type: e.target.value as QuestionType })}
      >
        <MenuItem value="TEXT">Text</MenuItem>
        <MenuItem value="MULTIPLE_CHOICE">Multiple Choice</MenuItem>
        <MenuItem value="CHECKBOX">Checkbox</MenuItem>
        <MenuItem value="DATE">Date</MenuItem>
      </Select>

      {(question.type === "MULTIPLE_CHOICE" ||
        question.type === "CHECKBOX") && (
        <OptionsEditor
          options={question.options ?? []}
          onChange={(opts) => update({ options: opts })}
        />
      )}
    </Box>
  );
};
