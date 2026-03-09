"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/constants";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const subjects = [
    "Quero conhecer as estratégias",
    "Informações sobre um fundo específico",
    "Wealth Management",
    "Assessoria / Distribuição",
    "Imprensa",
    "Outro",
  ];

  const openMailto = () => {
    const mailtoBody = `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nAssunto: ${formData.subject}\n\nMensagem:\n${formData.message}`;
    const mailtoLink = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      formData.subject || "Contato pelo site"
    )}&body=${encodeURIComponent(mailtoBody)}`;
    window.open(mailtoLink, "_self");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Web3Forms — serviço gratuito para sites estáticos
      // Cadastre-se em https://web3forms.com e substitua a chave abaixo
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "SUA_CHAVE_WEB3FORMS_AQUI",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject || "Contato pelo site",
          message: formData.message,
          from_name: "Reach Capital Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        openMailto();
        setStatus("success");
      }
    } catch {
      openMailto();
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-lime/10 border border-lime/30 rounded-lg p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-lime/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-navy-900 font-bold text-xl mb-2">Mensagem enviada!</h3>
        <p className="text-gray-500 text-sm mb-6">
          Obrigado pelo contato. Nossa equipe retornará em até 24 horas úteis.
        </p>
        <a
          href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Olá! Acabei de enviar uma mensagem pelo site.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white text-sm font-bold rounded-lg hover:bg-green-600 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Continuar pelo WhatsApp
        </a>
        <br />
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-gray-400 text-sm hover:text-navy-900 transition-colors"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          Erro ao enviar. Tente novamente ou entre em contato por{" "}
          <a href={`mailto:${COMPANY.email}`} className="underline font-semibold">e-mail</a>.
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-navy-900 text-sm font-semibold mb-2">
          Nome completo *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime/30 text-sm transition-colors"
          placeholder="Seu nome"
          disabled={status === "sending"}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-navy-900 text-sm font-semibold mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime/30 text-sm transition-colors"
            placeholder="seu@email.com"
            disabled={status === "sending"}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-navy-900 text-sm font-semibold mb-2">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime/30 text-sm transition-colors"
            placeholder="(11) 99999-0000"
            disabled={status === "sending"}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-navy-900 text-sm font-semibold mb-2">
          Assunto *
        </label>
        <select
          id="subject"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime/30 text-sm transition-colors bg-white"
          disabled={status === "sending"}
        >
          <option value="">Selecione um assunto</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-navy-900 text-sm font-semibold mb-2">
          Mensagem *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime/30 text-sm transition-colors resize-none"
          placeholder="Como podemos ajudá-lo?"
          disabled={status === "sending"}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-8 py-4 bg-lime text-navy-900 text-sm tracking-wider uppercase font-bold hover:bg-lime-light transition-colors duration-200 rounded-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Enviando...
          </>
        ) : (
          "Enviar mensagem"
        )}
      </button>

      <p className="text-gray-400 text-xs text-center">
        Ao enviar, você concorda com nossa política de privacidade. Ou entre em contato:{" "}
        <a href={`mailto:${COMPANY.email}`} className="text-lime hover:underline">
          {COMPANY.email}
        </a>
      </p>
    </form>
  );
}
