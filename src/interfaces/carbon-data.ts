export type GetIntensityDateRequest = {
  from: string;
  to: string;
}; // Date in YYYY-MM-DD format e.g. 2017-08-25

export type IntensityIndex =
  | "very low"
  | "low"
  | "moderate"
  | "high"
  | "very high";

export interface ICarbonIntensity {
  forecast: number;
  actual: number;
  index: IntensityIndex;
}

export interface ICarbonData {
  from: string; // Datetime in ISO8601 format YYYY-MM-DDThh:mmZ e.g. 2017-08-25T12:30Z. All times provided in UTC (+00:00)
  to: string; // Datetime
  intensity: ICarbonIntensity;
}

export interface ICarbonIntensityResponse {
  data: ICarbonData[];
}
