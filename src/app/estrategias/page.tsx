import { Metadata } from "next";
import EstrategiasClient from "@/components/sections/EstrategiasClient";

export const metadata: Metadata = {
  title: "Estratégias | Reach Capital",
  description:
    "Conheça as 10 estratégias de investimento da Reach Capital: ações, renda fixa, crédito e previdência.",
};

export default function EstrategiasPage() {
  return <EstrategiasClient />;
}
