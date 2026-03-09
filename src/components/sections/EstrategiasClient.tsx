"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FundPerformanceChart from "@/components/sections/FundPerformanceChart";
import FundComparison from "@/components/sections/FundComparison";
import { FUNDS, DISCLAIMER } from "@/lib/constants";

const CATEGORIES = [
  { key: "todos", label: "Todos" },
  { key: "renda-variavel", label: "Renda Variável" },
  { key: "renda-fixa", label: "Renda Fixa" },
  { key: "credito", label: "Crédito" },
  { key: "previdencia", label: "Previdência" },
];

export default function EstrategiasClient() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [expandedFund, setExpandedFund] = useState<string | null>(null);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const filteredFunds =
    activeCategory === "todos"
      ? FUNDS
      : FUNDS.filter((f) => f.category === activeCategory);

  const toggleCompare = (name: string) => {
    setCompareList((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : prev.length < 4 ? [...prev, name] : prev
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 1440 400" fill="white" className="absolute bottom-0 w-full">
            <path d="M0 400L120 350L240 380L360 300L480 340L600 250L720 200L840 280L960 180L1080 240L1200 160L1320 220L1440 150V400H0Z" />
          </svg>
        </div>
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-lime" />
            <span className="text-lime text-sm tracking-[0.3em] uppercase font-semibold">
              Estratégias
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Nossos Fundos
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl">
            10 estratégias complementares para diferentes perfis e objetivos de
            investimento. Da renda variável ao crédito estruturado.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex flex-wrap items-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.key
                    ? "bg-lime text-navy-900"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {cat.label}
                {cat.key !== "todos" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({FUNDS.filter((f) => f.category === cat.key).length})
                  </span>
                )}
              </button>
            ))}

            {/* Compare button */}
            {compareList.length >= 2 && (
              <button
                onClick={() => setShowComparison(true)}
                className="ml-auto px-4 py-2 rounded-full text-sm font-bold bg-navy-700 text-white hover:bg-navy-600 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Comparar ({compareList.length})
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Funds Grid */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredFunds.map((fund, i) => {
              const isExpanded = expandedFund === fund.name;
              const isComparing = compareList.includes(fund.name);

              return (
                <ScrollReveal key={fund.name} delay={i * 80}>
                  <div
                    className={`bg-white rounded-lg border transition-all duration-300 h-full ${
                      isComparing
                        ? "border-lime shadow-lg ring-2 ring-lime/20"
                        : "border-gray-100 hover:shadow-lg"
                    }`}
                  >
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-lime text-xs tracking-wider uppercase font-bold mb-1">
                            {fund.subtitle}
                          </p>
                          <h3 className="text-xl font-bold text-navy-900">
                            {fund.name}
                          </h3>
                        </div>
                        {fund.return && (
                          <div className="text-right">
                            <p className="text-lime text-2xl font-bold">
                              {fund.return}
                            </p>
                            {fund.benchmarkReturn && (
                              <p className="text-gray-400 text-xs">
                                vs {fund.benchmarkReturn}
                              </p>
                            )}
                          </div>
                        )}
                      </div>

                      <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        {fund.description}
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm border-t border-gray-100 pt-4">
                        <div>
                          <p className="text-gray-400 text-xs mb-1">Benchmark</p>
                          <p className="text-navy-900 font-semibold">{fund.benchmark}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs mb-1">Invest. Mínimo</p>
                          <p className="text-navy-900 font-semibold">{fund.minInvest}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs mb-1">Tx. Admin</p>
                          <p className="text-navy-900 font-semibold">{fund.txAdmin}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs mb-1">Tx. Performance</p>
                          <p className="text-navy-900 font-semibold">{fund.txPerf}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs mb-1">Cotização</p>
                          <p className="text-navy-900 font-semibold">{fund.cotizacao}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs mb-1">Resgate</p>
                          <p className="text-navy-900 font-semibold">{fund.resgate}</p>
                        </div>
                        {fund.aum && (
                          <div>
                            <p className="text-gray-400 text-xs mb-1">Patrimônio</p>
                            <p className="text-navy-900 font-semibold">{fund.aum}</p>
                          </div>
                        )}
                        {fund.since && (
                          <div>
                            <p className="text-gray-400 text-xs mb-1">Início</p>
                            <p className="text-navy-900 font-semibold">{fund.since}</p>
                          </div>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
                        <button
                          onClick={() => setExpandedFund(isExpanded ? null : fund.name)}
                          className="flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-lime transition-colors"
                        >
                          <svg
                            className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                          {isExpanded ? "Ocultar gráfico" : "Ver rentabilidade"}
                        </button>

                        <button
                          onClick={() => toggleCompare(fund.name)}
                          className={`ml-auto flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-all ${
                            isComparing
                              ? "bg-lime/20 text-lime-dark"
                              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                          }`}
                        >
                          {isComparing ? (
                            <>
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              Selecionado
                            </>
                          ) : (
                            <>
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                              </svg>
                              Comparar
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expanded chart */}
                    {isExpanded && (
                      <div className="px-8 pb-8 border-t border-gray-100 pt-6">
                        <h4 className="text-sm font-bold text-navy-900 mb-4">
                          Rentabilidade Acumulada (2024)
                        </h4>
                        <FundPerformanceChart
                          fundName={fund.name}
                          benchmarkName={fund.benchmark}
                        />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {filteredFunds.length === 0 && (
            <p className="text-center text-gray-400 py-12">
              Nenhum fundo encontrado nesta categoria.
            </p>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-navy-900">
        <div className="container-custom">
          <p className="text-white/30 text-xs leading-relaxed">{DISCLAIMER}</p>
        </div>
      </section>

      {/* Comparison Modal */}
      {showComparison && (
        <FundComparison
          selectedFunds={compareList}
          onClose={() => setShowComparison(false)}
        />
      )}

      {/* Floating compare bar */}
      {compareList.length > 0 && !showComparison && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-navy-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-4">
          <span className="text-sm">
            <strong>{compareList.length}</strong> fundo{compareList.length > 1 ? "s" : ""} selecionado{compareList.length > 1 ? "s" : ""}
          </span>
          {compareList.length >= 2 && (
            <button
              onClick={() => setShowComparison(true)}
              className="px-4 py-1.5 bg-lime text-navy-900 text-sm font-bold rounded-full hover:bg-lime-light transition-colors"
            >
              Comparar
            </button>
          )}
          <button
            onClick={() => setCompareList([])}
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            Limpar
          </button>
        </div>
      )}
    </>
  );
}
