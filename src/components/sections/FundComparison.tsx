"use client";

import { FUNDS } from "@/lib/constants";

interface Props {
  selectedFunds: string[];
  onClose: () => void;
}

export default function FundComparison({ selectedFunds, onClose }: Props) {
  const funds = FUNDS.filter((f) => selectedFunds.includes(f.name));

  if (funds.length < 2) return null;

  const fields = [
    { key: "subtitle", label: "Tipo" },
    { key: "benchmark", label: "Benchmark" },
    { key: "return", label: "Retorno" },
    { key: "since", label: "Início" },
    { key: "aum", label: "Patrimônio" },
    { key: "minInvest", label: "Invest. Mínimo" },
    { key: "txAdmin", label: "Tx. Admin" },
    { key: "txPerf", label: "Tx. Performance" },
    { key: "cotizacao", label: "Cotização" },
    { key: "resgate", label: "Resgate" },
  ] as const;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
      <div className="fixed inset-0 bg-navy-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <h3 className="text-lg font-bold text-navy-900">
            Comparar Fundos
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Table */}
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium text-xs uppercase tracking-wider border-b border-gray-100 w-36">
                    Característica
                  </th>
                  {funds.map((fund) => (
                    <th
                      key={fund.name}
                      className="text-left py-3 px-4 border-b border-gray-100"
                    >
                      <p className="text-lime text-xs tracking-wider uppercase font-bold">
                        {fund.subtitle}
                      </p>
                      <p className="text-navy-900 font-bold">{fund.name}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fields.map((field) => (
                  <tr key={field.key} className="border-b border-gray-50 hover:bg-cream/50 transition-colors">
                    <td className="py-3 px-4 text-gray-400 text-xs uppercase tracking-wider font-medium">
                      {field.label}
                    </td>
                    {funds.map((fund) => {
                      const value = fund[field.key];
                      return (
                        <td key={fund.name} className="py-3 px-4 text-navy-900 font-semibold">
                          {value || "—"}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                {/* Descrição */}
                <tr className="border-b border-gray-50">
                  <td className="py-3 px-4 text-gray-400 text-xs uppercase tracking-wider font-medium align-top">
                    Descrição
                  </td>
                  {funds.map((fund) => (
                    <td key={fund.name} className="py-3 px-4 text-gray-500 text-xs leading-relaxed">
                      {fund.description}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
