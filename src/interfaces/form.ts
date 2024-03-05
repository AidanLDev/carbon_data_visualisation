import { Dispatch, SetStateAction } from "react";
import { DateTime } from "luxon";

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
  from: DateTime<true>;
  setFrom: StateSetter<DateTime>;
  to: DateTime<true>;
  setTo: StateSetter<DateTime>;
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

export interface IDatePickerInputProps {
  label: string;
  date: DateTime<true>;
  handleDateChange: (date: Date | null, rangeSelected: "start" | "end") => void;
  dateSelects: "start" | "end";
  maxDate: Date;
  minDate?: Date;
}