import { Dispatch, SetStateAction } from "react";

export type StateSetter<T> = Dispatch<SetStateAction<T>>;

export type InputType = "text" | "date" | "time";

export interface IDefaultInputProps {
  label: string;
  placeholder?: string;
  value: string;
  valueSetter: StateSetter<string>;
}

export interface IInputProps extends IDefaultInputProps {
  type?: InputType;
  max?: number;
}

export interface ISelectProps extends IDefaultInputProps {
  options: string[] | number[];
}

export interface IDateRangeProps {
  from: string;
  setFrom: StateSetter<string>;
  to: string;
  setTo: StateSetter<string>;
}

export interface ITimeZoneProps {
  timeZone: string;
  setTimeZone: StateSetter<string>;
}

export interface IFormState extends IDateRangeProps, ITimeZoneProps {
  validDateRange: string;
}

export interface IErrorMessageProps {
  message: string;
  isValid: boolean;
}
