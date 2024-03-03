import {
  ICarbonIntensityResponse,
  GetIntensityDateRequest,
} from "@interfaces/carbon-data";
import { BASE_API_URL } from "@utils/consts";

export async function getCarbonDateRange({
  from,
  to,
}: GetIntensityDateRequest): Promise<ICarbonIntensityResponse> {
  const res = await fetch(`${BASE_API_URL}/intensity/stats/${from}/${to}/24`);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch carbon data for date range: ${from} - ${to}`
    );
  }

  return res.json();
}
