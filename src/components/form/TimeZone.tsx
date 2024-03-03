import { timeZones } from "@/utils/consts";
import Select from "./Select";
import { ITimeZoneProps } from "@/interfaces/form";

export default function TimeZone({ timeZone, setTimeZone }: ITimeZoneProps) {
  return (
    <div>
      <Select
        label="TimeZone"
        options={timeZones}
        value={timeZone}
        valueSetter={setTimeZone}
      />
    </div>
  );
}
