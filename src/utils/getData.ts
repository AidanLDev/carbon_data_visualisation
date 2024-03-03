import { DateTime } from "luxon";

import {
  ICarbonIntensityResponse,
  GetIntensityDateRequest,
  ICarbonData,
} from "@interfaces/carbon-data";
import {
  BASE_API_URL,
  primaryColour,
  primaryColourTransparent,
  secondaryColour,
  secondaryColourTransparent,
} from "@utils/consts";

export async function getCarbonDateRange({
  from,
  to,
}: GetIntensityDateRequest): Promise<ICarbonIntensityResponse> {
  const res = await fetch(`${BASE_API_URL}/intensity/${from}/${to}`);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch carbon data for date range: ${from} - ${to}`
    );
  }

  return res.json();
}

export function buildChartData(chartData: ICarbonData[], timeZone: string) {
  let label = [];
  let actual = [];
  let forecast = [];

  for (let i = 0; i < chartData.length; i++) {
    label.push(
      DateTime.fromISO(chartData[i].from, { zone: timeZone }).toFormat(
        "yyyy-LL-dd hh:mm"
      )
    );
    actual.push(chartData[i].intensity.actual);
    forecast.push(chartData[i].intensity.forecast);
  }

  const parsedData = {
    labels: label,
    datasets: [
      {
        id: 1,
        label: "Actual",
        data: actual,
        borderColor: primaryColour,
        backgroundColor: primaryColourTransparent,
      },
      {
        id: 2,
        label: "Forecast",
        data: forecast,
        borderColor: secondaryColour,
        backgroundColor: secondaryColourTransparent,
      },
    ],
  };
  return parsedData;
}
