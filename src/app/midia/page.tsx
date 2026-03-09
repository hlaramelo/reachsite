import { Metadata } from "next";
import MidiaClient from "@/components/sections/MidiaClient";

export const metadata: Metadata = {
  title: "Mídia | Reach Capital",
  description:
    "Cartas do gestor, artigos, lives e aparições na imprensa da Reach Capital.",
};

export default function MidiaPage() {
  return <MidiaClient />;
}
