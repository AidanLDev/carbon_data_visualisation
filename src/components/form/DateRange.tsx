import { IDateRangeProps } from "@/interfaces/form";
import { DateTime } from "luxon";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateRange({
  to,
  setTo,
  from,
  setFrom,
}: IDateRangeProps) {
  const handleDatePickerDateChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    if (start) {
      setFrom(DateTime.fromJSDate(start));
    }

    if (end) {
      setTo(DateTime.fromJSDate(end));
    }
  };
  return (
    <>
      <DatePicker
        showIcon
        onChange={handleDatePickerDateChange}
        selectsRange
        startDate={new Date(from.toJSDate())}
        endDate={new Date(to.toJSDate())}
      />
    </>
  );
}
