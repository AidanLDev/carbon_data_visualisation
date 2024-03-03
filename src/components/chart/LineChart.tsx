import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ILineChartProps } from "@/interfaces/chart";
import { buildChartData } from "@/utils/getData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Carbon intensity Actual vs Forecast",
    },
  },
};

export default function LineChart({ data, timeZone }: ILineChartProps) {
  const chartData = buildChartData(data, timeZone);
  return (
    <div className="mb-6">
      <Line options={options} datasetIdKey="id" data={chartData} />
    </div>
  );
}
