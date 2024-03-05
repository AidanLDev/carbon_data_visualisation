import { IDateRangeProps } from "@/interfaces/form";
import { DateTime } from "luxon";
import DatePickerInput from "./DatePickerInput";

export default function DateRange({
  to,
  setTo,
  from,
  setFrom,
}: IDateRangeProps) {
  const handleSelectDate = (
    date: Date | null,
    rangeSelected: "start" | "end"
  ) => {
    if (date == null) {
      return;
    }
    if (rangeSelected === "start") {
      setFrom(DateTime.fromJSDate(date));
    } else {
      setTo(DateTime.fromJSDate(date));
    }
  };
  return (
    <>
      <DatePickerInput
        label="From"
        date={from}
        dateSelects="start"
        handleDateChange={handleSelectDate}
        maxDate={new Date()}
      />
      <DatePickerInput
        label="To"
        date={to}
        dateSelects="end"
        handleDateChange={handleSelectDate}
        maxDate={from.plus({ days: 14 }).toJSDate()}
        minDate={from.plus({ days: 1 }).toJSDate()}
      />
    </>
  );
}
