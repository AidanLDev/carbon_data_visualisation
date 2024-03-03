import { DateTime } from "luxon";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { ILineChartProps } from "@/interfaces/chart";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function LineChart({ data, timeZone }: ILineChartProps) {
  // TODO: Create build chartData function so I only need to loop through the data once rather than once for each label/data in datasets
  const chartData = {
    label: data.map((dailyData) =>
      DateTime.fromISO(dailyData.from, { zone: timeZone }).toLocaleString()
    ),
    datasets: [
      {
        label: "Actual",
        data: data.map((dailyData) => dailyData.intensity.actual),
      },
      {
        label: "Forecast",
        data: data.map((dailyData) => dailyData.intensity.forecast),
      },
    ],
  };
  return (
    <div>
      <Line data={chartData} />
    </div>
  );
}
