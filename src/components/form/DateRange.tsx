import { IDateRangeProps } from "@/interfaces/form";
import Input from "./Input";

export default function DateRange({
  to,
  setTo,
  from,
  setFrom,
}: IDateRangeProps) {
  return (
    <>
      <Input
        label="From"
        placeholder="2024-02-20"
        value={from}
        valueSetter={setFrom}
        max={10}
      />
      <span className="self-end pb-2"> - </span>
      <Input
        label="To"
        placeholder="2024-02-27"
        value={to}
        valueSetter={setTo}
        max={10}
      />
    </>
  );
}
