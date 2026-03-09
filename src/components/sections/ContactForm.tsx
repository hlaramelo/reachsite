"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/constants";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    "Quero conhecer as estratégias",
    "Informações sobre um fundo específico",
    "Wealth Management",
    "Assessoria / Distribuição",
    "Imprensa",
    "Outro",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build mailto link with form data
    const mailtoBody = `Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefone: ${formData.phone}%0D%0AAssunto: ${formData.subject}%0D%0A%0D%0AMensagem:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      formData.subject || "Contato pelo site"
    )}&body=${mailtoBody}`;

    window.open(mailtoLink, "_self");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-lime/10 border border-lime/30 rounded-lg p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-lime/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-navy-900 font-bold text-xl mb-2">
          Mensagem preparada!
        </h3>
        <p className="text-gray-500 text-sm mb-4">
          Seu cliente de e-mail deve ter aberto com a mensagem preenchida.
          Caso prefira, entre em contato diretamente:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`mailto:${COMPANY.email}`}
            className="inline-flex items-center justify-center px-6 py-3 bg-navy-700 text-white text-sm font-bold rounded hover:bg-navy-600 transition-colors"
          >
            Enviar e-mail
          </a>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
              `Olá! Meu nome é ${formData.name}. ${formData.message}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white text-sm font-bold rounded hover:bg-green-600 transition-colors"
          >
            Enviar pelo WhatsApp
          </a>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
          }}
          className="mt-4 text-gray-400 text-sm hover:text-navy-900 transition-colors"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
        />
      </div>

      <button
        type="submit"
        className="w-full px-8 py-4 bg-lime text-navy-900 text-sm tracking-wider uppercase font-bold hover:bg-lime-light transition-colors duration-200 rounded-lg"
      >
        Enviar mensagem
      </button>

      <p className="text-gray-400 text-xs text-center">
        Ou entre em contato diretamente:{" "}
        <a href={`mailto:${COMPANY.email}`} className="text-lime hover:underline">
          {COMPANY.email}
        </a>
      </p>
    </form>
  );
}
