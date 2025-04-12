import Button from "@mui/material/Button";

type SMButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function SMButton(props: SMButtonProps) {
  const { label, onClick, disabled, type, className } = props;

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={disabled}
      type={type || "button"}
      className={className}
    >
      {label}
    </Button>
  );
}
