import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs"; // Import the dayjs library

type SMDatePickerProps = {
  label: string;
  onChange?: (value: string) => void;
};

export default function SMDatePicker(props: SMDatePickerProps) {
  const { onChange, label } = props;

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = dayjs(date).format("YYYY-MM-DD"); // Format the date as a string
      onChange?.(formattedDate);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker label={label} onChange={handleDateChange} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
