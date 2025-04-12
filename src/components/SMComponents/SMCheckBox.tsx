import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

type SMCheckBoxProps = {
  label: string;
};

export default function SMCheckBox(props: SMCheckBoxProps) {
  const { label } = props;

  return (
    <FormControlLabel
      className="ms-1"
      control={<Checkbox defaultChecked />}
      label={label}
    />
  );
}
