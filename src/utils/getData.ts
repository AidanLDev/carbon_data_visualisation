import {
  ICarbonIntensityResponse,
  GetIntensityDateRequest,
} from "@interfaces/carbon-data";
import { BASE_API_URL } from "@utils/consts";

export async function getCarbonDateRange(
  dateRange: GetIntensityDateRequest
): Promise<ICarbonIntensityResponse> {
  const res = await fetch(`${BASE_API_URL}/intensity/date/${dateRange}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch carbon data for date range: ${dateRange}`);
  }

  return res.json();
}
