import type { Question } from "@/generated/graphql";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface MultipleChoiceQuestionProps {
  question: Question;
}

export const MultipleChoiceQuestion = ({
  question,
}: MultipleChoiceQuestionProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={question.id}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <RadioGroup {...field}>
          {question.options?.map((option, index) => (
            <FormControlLabel
              key={`option-${index}`}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      )}
    />
  );
};
