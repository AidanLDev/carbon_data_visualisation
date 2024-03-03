import { IInputProps } from "@interfaces/form";

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  valueSetter,
  max,
}: IInputProps) {
  return (
    <div>
      <label htmlFor={label} className="text-lg text-primary">
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow sm">
        <input
          type={type}
          name={label}
          id={label}
          placeholder={placeholder}
          value={value}
          onChange={(e) => valueSetter(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 pl-6 pr-20 text-primary ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary focus-within:outline-none"
          maxLength={max}
        />
      </div>
    </div>
  );
}
