import { Box, Button, TextField } from "@mui/material";

type Props = {
  options: string[];
  onChange: (opts: string[]) => void;
};

export const OptionsEditor = ({ options, onChange }: Props) => {
  const update = (index: number, value: string) => {
    const copy = [...options];
    copy[index] = value;
    onChange(copy);
  };

  const addOption = () => {
    onChange([...options, ""]);
  };

  const removeOption = (index: number) => {
    const copy = options.filter((_, i) => i !== index);
    onChange(copy);
  };

  return (
    <Box>
      {options.map((opt, i) => (
        <Box key={i} sx={{ display: "flex", gap: 1, mb: 1 }}>
          <TextField
            value={opt}
            onChange={(e) => update(i, e.target.value)}
            fullWidth
            label={`Option ${i + 1}`}
          />

          <Button
            color="error"
            variant="contained"
            onClick={() => removeOption(i)}
          >
            Remove
          </Button>
        </Box>
      ))}

      <Button variant="contained" onClick={addOption}>
        Add option
      </Button>
    </Box>
  );
};