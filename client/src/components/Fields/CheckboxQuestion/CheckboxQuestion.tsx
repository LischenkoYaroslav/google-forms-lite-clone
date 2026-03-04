import type { Question } from "@/generated/graphql";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface CheckboxQuestionProps {
  question: Question;
}

export const CheckboxQuestion = ({ question }: CheckboxQuestionProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={question.id}
      control={control}
      defaultValue={[]}
      render={({ field }) => (
        <FormGroup>
          {question.options?.map((option) => (
            <FormControlLabel
              key={option}
              label={option}
              control={
                <Checkbox
                  checked={field.value.includes(option)}
                  onChange={(e) => {
                    const newValue = e.target.checked
                      ? [...field.value, option]
                      : field.value.filter((v: string) => v !== option);

                    field.onChange(newValue);
                  }}
                />
              }
            />
          ))}
        </FormGroup>
      )}
    />
  );
};