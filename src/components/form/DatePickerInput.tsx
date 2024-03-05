import DatePicker from "react-datepicker";
import { DateTime } from "luxon";
import "react-datepicker/dist/react-datepicker.css";

export interface IDatePickerInputProps {
  label: string;
  date: DateTime<true>;
  handleDateChange: (date: Date | null, rangeSelected: "start" | "end") => void;
  dateSelects: "start" | "end";
  maxDate: Date;
  minDate?: Date;
}
export default function DatePickerInput({
  label,
  date,
  handleDateChange,
  dateSelects,
  maxDate,
  minDate,
}: IDatePickerInputProps) {
  return (
    <div className="flex flex-col justify-between align-end">
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
        className="pl-6"
      />
    </div>
  );
}
