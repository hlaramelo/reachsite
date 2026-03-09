"use client";

import { FUND_PERFORMANCE } from "@/lib/constants";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface Props {
  fundName: string;
  benchmarkName: string;
}

export default function FundPerformanceChart({ fundName, benchmarkName }: Props) {
  const data = FUND_PERFORMANCE[fundName];

  if (!data) {
    return (
      <div className="h-64 flex items-center justify-center text-gray-400 text-sm">
        Dados de rentabilidade ainda não disponíveis para este fundo.
      </div>
    );
  }

  // Calcular rentabilidade acumulada
  const cumulativeData = data.reduce(
    (acc, item) => {
      const prevFund = acc.length > 0 ? acc[acc.length - 1].fundAcc : 0;
      const prevBench = acc.length > 0 ? acc[acc.length - 1].benchAcc : 0;
      acc.push({
        month: item.month,
        fund: item.fund,
        benchmark: item.benchmark,
        fundAcc: Number((prevFund + item.fund).toFixed(2)),
        benchAcc: Number((prevBench + item.benchmark).toFixed(2)),
      });
      return acc;
    },
    [] as { month: string; fund: number; benchmark: number; fundAcc: number; benchAcc: number }[]
  );

  const activeData = cumulativeData.filter((d) => d.fund !== 0 || d.benchmark !== 0);

  if (activeData.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center text-gray-400 text-sm">
        Fundo ainda sem histórico suficiente para exibir gráfico.
      </div>
    );
  }

  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={activeData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
          <defs>
            <linearGradient id={`grad-${fundName.replace(/\s/g, "")}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8DC63F" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#8DC63F" stopOpacity={0} />
            </linearGradient>
            <linearGradient id={`gradBench-${fundName.replace(/\s/g, "")}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1E4D8C" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#1E4D8C" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 11, fill: "#999" }}
            tickLine={false}
            axisLine={{ stroke: "#e5e5e5" }}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#999" }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0F2847",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "12px",
            }}
            formatter={(value, name) => [
              `${Number(value).toFixed(2)}%`,
              String(name),
            ]}
          />
          <Legend
            wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }}
          />
          <Area
            type="monotone"
            dataKey="fundAcc"
            name={fundName}
            stroke="#8DC63F"
            strokeWidth={2}
            fill={`url(#grad-${fundName.replace(/\s/g, "")})`}
          />
          <Area
            type="monotone"
            dataKey="benchAcc"
            name={benchmarkName}
            stroke="#1E4D8C"
            strokeWidth={2}
            strokeDasharray="5 5"
            fill={`url(#gradBench-${fundName.replace(/\s/g, "")})`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
