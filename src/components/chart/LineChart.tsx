import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
  ChartTypeRegistry,
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
    tooltip: {
      callbacks: {
        label: function (context: TooltipItem<keyof ChartTypeRegistry>) {
          let idx = context.dataIndex;
          let label = (context.dataset.data[idx] as number).toString();
          let forecastIndex = (context.dataset as any).forecastIndex[idx];
          return (label += `: Index - ${forecastIndex}`);
        },
      },
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
