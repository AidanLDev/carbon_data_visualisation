import { IErrorMessageProps } from "@interfaces/form";

export function ErrorMessage({ message, isValid }: IErrorMessageProps) {
  return (
    <p
      className={`text-error self-end pb-2 pl-8 flex justify-center ${
        isValid ? "invisible" : "visible"
      }`}
    >
      {message}
    </p>
  );
}
