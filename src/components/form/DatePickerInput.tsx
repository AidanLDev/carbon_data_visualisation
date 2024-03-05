import DatePicker from "react-datepicker";
import { IDatePickerInputProps } from "@/interfaces/form";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerInput({
  label,
  date,
  handleDateChange,
  dateSelects,
  maxDate,
  minDate,
}: IDatePickerInputProps) {
  return (
    <div className="flex flex-col justify-between">
      <label className="text-lg text-primary" htmlFor={`${label}-date-picker`}>
        {label}
      </label>
      <DatePicker
        id={`${label}-date-picker`}
        dateFormat="yyyy-MM-dd"
        selected={new Date(date.toJSDate())}
        selectsStart={dateSelects === "start"}
        selectsEnd={dateSelects === "end"}
        onChange={(date) => handleDateChange(date, dateSelects)}
        maxDate={maxDate}
        minDate={minDate}
        enableTabLoop={false}
        className="py-1.5 pl-6 focus:ring-inset focus-visible:outline-secondary"
      />
    </div>
  );
}
