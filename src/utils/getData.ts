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
  let res;
  try {
    res = await fetch(`${BASE_API_URL}/intensity/${from}/${to}`);
  } catch (e) {
    throw new Error(
      `request to ${BASE_API_URL}/intensity/${from}/${to} failed ${e}`
    );
  }

  if (!res.ok) {
    throw new Error(
      `Failed to fetch carbon data for date range: ${from} - ${to}: ${res}`
    );
  }

  return res.json();
}

export function buildChartData(chartData: ICarbonData[], timeZone: string) {
  let label = [];
  let actual = [];
  let forecast = [];
  let forecastIndex = [];

  for (let i = 0; i < chartData.length; i++) {
    label.push(
      DateTime.fromISO(chartData[i].from, { zone: timeZone }).toFormat(
        "yyyy-LL-dd hh:mm"
      )
    );
    actual.push(chartData[i].intensity.actual);
    forecast.push(chartData[i].intensity.forecast);
    forecastIndex.push(chartData[i].intensity.index);
  }

  const parsedData = {
    labels: label,
    datasets: [
      {
        id: 1,
        label: "Actual",
        data: actual,
        forecastIndex,
        borderColor: primaryColour,
        backgroundColor: primaryColourTransparent,
      },
      {
        id: 2,
        label: "Forecast",
        data: forecast,
        forecastIndex,
        borderColor: secondaryColour,
        backgroundColor: secondaryColourTransparent,
      },
    ],
  };
  return parsedData;
}
