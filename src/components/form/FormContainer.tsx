"use client";
import { IFormState } from "@/interfaces/form";
import DateRange from "./DateRange";
import TimeZone from "./TimeZone";

export default function FormContainer({
  from,
  setFrom,
  to,
  setTo,
  timeZone,
  setTimeZone,
}: IFormState) {
  return (
    <div className="flex p-8 justify-center gap-4">
      <DateRange from={from} setFrom={setFrom} to={to} setTo={setTo} />
      <TimeZone timeZone={timeZone} setTimeZone={setTimeZone} />
    </div>
  );
}
