import { ISelectProps } from "@/interfaces/form";

export default function Select({
  label,
  options,
  value,
  valueSetter,
}: ISelectProps) {
  return (
    <div>
      <label htmlFor={label} className="text-lg text-primary">
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow sm">
        <select
          className="block w-full rounded-md border-0 py-1.5 pl-6 pr-20 text-primary focus-visible:outline-secondary  "
          value={value}
          onChange={(e) => valueSetter(e.target.value)}
        >
          {options.map((option, idx) => (
            <option key={`${option}__${idx}`}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
