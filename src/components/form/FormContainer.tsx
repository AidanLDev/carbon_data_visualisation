import { IFormState } from "@/interfaces/form";
import DateRange from "./DateRange";
import TimeZone from "./TimeZone";
import { ErrorMessage } from "./ErrorMessage";

export default function FormContainer({
  from,
  setFrom,
  to,
  setTo,
  timeZone,
  setTimeZone,
  validDateRange,
}: IFormState) {
  return (
    <>
      <div className="flex p-8 justify-center gap-4">
        <DateRange from={from} setFrom={setFrom} to={to} setTo={setTo} />
        <TimeZone timeZone={timeZone} setTimeZone={setTimeZone} />
      </div>
      <ErrorMessage message={validDateRange} isValid={validDateRange === ""} />
    </>
  );
}
