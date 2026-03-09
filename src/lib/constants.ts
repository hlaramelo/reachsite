export const COMPANY = {
  name: "Reach Capital",
  tagline: "Crescer é seguir evoluindo com consistência.",
  description:
    "Gestora de recursos independente, modelo partnership, com quase uma década de história. R$ 3 bilhões sob gestão, 25 colaboradores, 10 estratégias. ANBIMA certificada.",
  about:
    "Gestora de recursos independente, modelo partnership, com quase uma década de história formal. Sócios com passagem por Credit Suisse, Citi, Goldman Sachs, BNP Paribas, IGC, Gávea, entre outros. R$ 3 bilhões sob gestão, 25 colaboradores, 10 estratégias.",
  founded: 2017,
  aum: "R$ 3 bilhões",
  employees: 25,
  strategies: 10,
  address: "Rua Iguatemi, 448 - 16º Andar, Itaim Bibi - São Paulo/SP",
  cep: "01451-010",
  email: "comercial@reachcapital.com.br",
  phone: "+55 11 2348-0100",
  whatsapp: "551123480100",
  social: {
    linkedin: "https://linkedin.com/company/reachcapital",
    instagram: "https://www.instagram.com/reachasset/",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Estratégias", href: "/estrategias" },
  { label: "Processo", href: "/processo" },
  { label: "Equipe", href: "/equipe" },
  { label: "Mídia", href: "/midia" },
  { label: "Contato", href: "/contato" },
];

export const STATS = [
  { value: "R$ 3bi", label: "Sob Gestão" },
  { value: "10", label: "Estratégias" },
  { value: "25", label: "Colaboradores" },
  { value: "2014", label: "Primeiro Fundo" },
];

export const PILLARS = [
  {
    title: "Estrutura Independente",
    description:
      "Sem conflito de interesse. Decisões de investimento livres, alinhadas exclusivamente ao interesse dos nossos cotistas.",
    icon: "shield",
  },
  {
    title: "Visão Global",
    description:
      "Cobertura de Brasil e exterior, agnóstica a setores e tamanhos de empresas. Buscamos as melhores oportunidades onde quer que estejam.",
    icon: "globe",
  },
  {
    title: "Research Investigativo",
    description:
      "960 visitas a empresas em 2025, 142 reuniões presenciais, 227 conferências, 275 virtuais. Conhecimento profundo das nossas teses.",
    icon: "search",
  },
  {
    title: "Partnership Meritocrático",
    description:
      "Time com skin in the game. Nossos gestores investem nos próprios fundos, garantindo alinhamento total com nossos cotistas.",
    icon: "team",
  },
];

export const TRACK_RECORD = [
  {
    fund: "Reach Total Return",
    highlight: "+375%",
    benchmark: "IMA-B +131%",
    description: "Retorno acumulado desde mar/2017",
  },
  {
    fund: "Reach FIA",
    highlight: "+311%",
    benchmark: "IBOV +260%",
    description: "Retorno acumulado desde dez/2014",
  },
  {
    fund: "Reach Small Caps",
    highlight: "+38%",
    benchmark: "IBOV +33,8%",
    description: "Retorno em 2025",
  },
];

export const TIMELINE = [
  {
    year: "2014",
    milestone:
      "Lançamento do Reach FIA — primeiro fundo long only de ações brasileiras",
  },
  {
    year: "2015",
    milestone: "Equipe de renda variável começa a trabalhar junta",
  },
  {
    year: "2017",
    milestone:
      "Fundação formal da Reach Capital; lançamento do Total Return",
  },
  {
    year: "2024",
    milestone:
      "Adição da mesa de Renda Fixa; lançamento do Inflação Ativa, DI e Small Caps; início do Wealth Management",
  },
  {
    year: "2025",
    milestone:
      "Ampliação da equipe; lançamento do Global, High Grade e Crédito Estruturado; inauguração da nova sede",
  },
];

export const FUNDS = [
  {
    name: "Reach Total Return",
    subtitle: "Multi-Asset",
    description:
      "Carteira multi-asset: ações, ETF, renda fixa, inflação, juros e moedas. Alocação média de 70% em ações, variável conforme macro.",
    benchmark: "IMA-B",
    return: "+375%",
    benchmarkReturn: "IMA-B +131%",
    since: "Mar/2017",
    aum: "R$ 303mi",
    minInvest: "R$ 100",
    cotizacao: "D+1",
    resgate: "D+16",
    txAdmin: "2,00%",
    txPerf: "20%",
    category: "renda-variavel",
  },
  {
    name: "Reach FIA",
    subtitle: "Ações Long Only",
    description:
      "Long only de ações brasileiras, small/mid/large caps. Análise bottom-up com overlay macro. 15–25 empresas, máximo 20% por empresa e 40% por setor. Prazo médio 2–3 anos. Enquadrado para EFPC e RPPS.",
    benchmark: "Ibovespa",
    return: "+311%",
    benchmarkReturn: "IBOV +260%",
    since: "Dez/2014",
    aum: "R$ 199mi",
    minInvest: "R$ 100",
    cotizacao: "D+1",
    resgate: "D+16",
    txAdmin: "1,66%",
    txPerf: "20%",
    category: "renda-variavel",
  },
  {
    name: "Reach Small Caps",
    subtitle: "Ações Small Caps",
    description:
      "Fundo concentrado (8–10 empresas) de pequena capitalização. Alta convicção, análise fundamentalista. Investidor qualificado.",
    benchmark: "Ibovespa",
    return: "+38%",
    benchmarkReturn: "IBOV +33,8%",
    since: "Abr/2024",
    aum: "R$ 17,9mi",
    minInvest: "R$ 1.000",
    cotizacao: "D+1",
    resgate: "D+30",
    txAdmin: "2,00%",
    txPerf: "20%",
    category: "renda-variavel",
  },
  {
    name: "Reach Global",
    subtitle: "Ações Internacionais",
    description:
      "Ações internacionais listadas nas principais bolsas do mundo. Processo fundamentalista com filtro das principais oportunidades globais.",
    benchmark: "MSCI ACWI",
    return: "+16,2%",
    benchmarkReturn: "ACWI +11,7%",
    since: "Fev/2025",
    aum: "R$ 36,1mi",
    minInvest: "R$ 1.000",
    cotizacao: "D+1",
    resgate: "D+30",
    txAdmin: "2,00%",
    txPerf: "20%",
    category: "renda-variavel",
  },
  {
    name: "Reach Total Return PREV",
    subtitle: "Previdência Multi-Asset",
    description:
      "Estratégia Total Return em formato previdenciário. Mesma filosofia multi-asset com foco em retornos de longo prazo.",
    benchmark: "IMA-B",
    return: "",
    benchmarkReturn: "",
    since: "",
    aum: "",
    minInvest: "R$ 1.000",
    cotizacao: "D+1",
    resgate: "D+7",
    txAdmin: "2,00%",
    txPerf: "20%",
    category: "previdencia",
  },
  {
    name: "Reach PREV Moderado",
    subtitle: "Previdência Moderada",
    description:
      "Estratégia previdenciária com abordagem moderada, equilibrando renda variável e renda fixa para volatilidade controlada.",
    benchmark: "CDI",
    return: "",
    benchmarkReturn: "",
    since: "",
    aum: "",
    minInvest: "R$ 1.000",
    cotizacao: "D+1",
    resgate: "D+7",
    txAdmin: "2,00%",
    txPerf: "20%",
    category: "previdencia",
  },
  {
    name: "Reach Inflação Ativa",
    subtitle: "Renda Fixa Ativa",
    description:
      "Renda fixa ativa em todos os mercados: pré, pós, inflação e juros. Framework proprietário com 4 dimensões: Preço, Técnico, Fundamento e Assimetria.",
    benchmark: "IMA-B",
    return: "+13,3%",
    benchmarkReturn: "",
    since: "2024",
    aum: "R$ 239mi",
    minInvest: "R$ 100",
    cotizacao: "D+1",
    resgate: "D+5",
    txAdmin: "1,31%",
    txPerf: "20%",
    category: "renda-fixa",
  },
  {
    name: "Reach DI RF",
    subtitle: "Liquidez Diária",
    description:
      "Fundo de liquidez diária. D+0 cotização e resgate. Ideal para reserva de liquidez com rentabilidade superior à poupança.",
    benchmark: "CDI",
    return: "",
    benchmarkReturn: "",
    since: "",
    aum: "R$ 239mi",
    minInvest: "R$ 100",
    cotizacao: "D+0",
    resgate: "D+0",
    txAdmin: "0,20%",
    txPerf: "n/a",
    category: "renda-fixa",
  },
  {
    name: "Reach Crédito High Grade",
    subtitle: "Crédito Investment Grade",
    description:
      "Portfólio líquido e diversificado de baixo risco: títulos públicos federais, títulos bancários, debêntures e FIDCs. 84% AAA/AA, duration médio 2,1 anos, spread médio CDI+1,4%.",
    benchmark: "CDI",
    return: "103% CDI",
    benchmarkReturn: "",
    since: "2025",
    aum: "R$ 100mi",
    minInvest: "R$ 100",
    cotizacao: "D+1",
    resgate: "D+15",
    txAdmin: "0,50%",
    txPerf: "20%",
    category: "credito",
  },
  {
    name: "Reach Crédito Estruturado",
    subtitle: "Crédito Privado",
    description:
      "Portfólio diversificado de cotas seniores e mezanino de FIDCs. Setores: recebíveis comerciais, consignado público, crédito pessoal, consórcio, financiamento de veículos e painéis solares. 18 FIDCs, duration médio 1,9 anos, spread médio CDI+4,2%.",
    benchmark: "CDI",
    return: "112,8% CDI",
    benchmarkReturn: "",
    since: "2025",
    aum: "R$ 101mi",
    minInvest: "R$ 1.000",
    cotizacao: "D+1",
    resgate: "D+120",
    txAdmin: "1,25%",
    txPerf: "20%",
    category: "credito",
  },
];

export const INVESTMENT_PROCESS = [
  {
    step: 1,
    title: "Filtro de Ações",
    description:
      "2 rankings mensais (Brasil + Exterior) gerados por sistema proprietário com indicadores de múltiplos, técnicos, liquidez e variações de preço.",
  },
  {
    step: 2,
    title: "Pesquisa",
    description:
      "Análise fundamentalista aprofundada, métricas qualitativas, reuniões com RIs, CFOs e diretores.",
  },
  {
    step: 3,
    title: "Investment Memo",
    description:
      "Documento interno com tese, pontos positivos/negativos, comparação com carteira e gatilhos de saída.",
  },
  {
    step: 4,
    title: "Comitê de Investimentos",
    description:
      "Reunião semanal com todo o time, discussão macro Brasil/Mundo, decisão colegiada; monitoramento contínuo.",
  },
];

export const DECISION_PILLARS = [
  "Visão macro — economia global, ciclos, geopolítica, IA",
  "Atratividade do mercado — oportunidades não precificadas",
  "Potencial do negócio — vantagens competitivas, crescimento",
  "Gestão de risco — parâmetros, hedges, tolerância",
  "Carteira diversificada",
];

export const PORTFOLIO_COMPANIES = [
  "Itaú",
  "BTG Pactual",
  "Nubank",
  "Sabesp",
  "Lavvi",
  "Cyrela",
  "Marcopolo",
  "Frasle",
  "Randon",
  "Equatorial",
  "Cury",
  "Eneva",
  "Azzas 2154",
  "Vivara",
  "C&A",
  "Renner",
  "Mills",
  "Orizon",
  "VTEX",
  "Sinqia",
  "Spotify",
  "NVIDIA",
  "Mercado Livre",
  "Meta",
  "Rumo",
  "Portobello",
  "Schulz",
  "TSMC",
  "Cameco",
  "Bitcoin",
  "Ethereum",
];

export const TEAM = [
  {
    name: "Ricardo Campos",
    credentials: "MsC",
    role: "CIO",
    background: "Credit Suisse, FGV, USP",
    bio: "Ricardo construiu uma sólida carreira na Hedging Griffo, uma das principais casas de investimento do Brasil, posteriormente adquirida pelo Credit Suisse, onde foi o mais jovem a se tornar sócio. Após a venda de sua participação ao banco suíço em 2015, Ricardo reuniu uma equipe de investimentos de primeira linha para fundar a Reach Capital.",
    image: "/images/team/ricardo-campos.jpg",
  },
  {
    name: "Igor Barenboim",
    credentials: "PhD",
    role: "Economista-Chefe",
    background: "Harvard, Ministério da Fazenda, Gávea, Itaú BBA",
    bio: "Economista com PhD pela Universidade de Harvard e um dos fundadores da Gávea Investimentos. Ocupou posições de destaque no setor público e privado, incluindo Vice-Presidente de Gestão de Capital no Itaú-Unibanco. Juntou-se à Reach em 2016.",
    image: "/images/team/igor-barenboim.jpg",
  },
  {
    name: "Mauricio Rahmani",
    credentials: "CFA",
    role: "Gestor Renda Variável",
    background: "Citi, FGV",
    bio: "",
    image: "/images/team/mauricio-rahmani.jpg",
  },
  {
    name: "Henrique Lara",
    credentials: "",
    role: "Gestor Renda Variável",
    background: "IGC, FGV",
    bio: "",
    image: "/images/team/henrique-lara.jpg",
  },
  {
    name: "Marcelo Zelada",
    credentials: "",
    role: "Gestor Renda Variável",
    background: "Banco CCF, BNP Paribas",
    bio: "",
    image: "/images/team/marcelo-zelada.jpg",
  },
  {
    name: "Norberto Alves",
    credentials: "MsC",
    role: "Gestor Renda Fixa",
    background: "Garde, Goldman Sachs, Asset1",
    bio: "",
    image: "/images/team/norberto-alves.jpg",
  },
  {
    name: "Pedro Breviglieri",
    credentials: "CFA",
    role: "Gestor Crédito Privado",
    background: "S&P Global, Fitch, Julius Bär",
    bio: "",
    image: "/images/team/pedro-breviglieri.jpg",
  },
  {
    name: "Khalil de Lima",
    credentials: "",
    role: "Analista",
    background: "KPMG, Williams Baptist",
    bio: "",
    image: "/images/team/khalil-de-lima.jpg",
  },
  {
    name: "Pedro Moura",
    credentials: "CFA",
    role: "Analista",
    background: "ING, Ibmec",
    bio: "",
    image: "/images/team/pedro-moura.jpg",
  },
  {
    name: "Gabriele Marcondes",
    credentials: "",
    role: "Analista",
    background: "Itaú BBA",
    bio: "",
    image: "/images/team/gabriele-marcondes.jpg",
  },
  {
    name: "Getulio Pedrosa",
    credentials: "CFA",
    role: "Trader",
    background: "Bradesco, HSBC, Santander",
    bio: "",
    image: "/images/team/getulio-pedrosa.jpg",
  },
  {
    name: "Thiago Picanço",
    credentials: "CFA, CAIA",
    role: "Wealth Management",
    background: "USP, Mogno",
    bio: "",
    image: "/images/team/thiago-picanco.jpg",
  },
];

export const DISTRIBUTORS = [
  "Itaú",
  "Ion Itaú",
  "XP",
  "BTG Pactual",
  "Safra",
  "Inter",
  "C6 Bank",
  "Genial",
  "Ativa",
  "Banco Daycoval",
  "Nova Futura",
  "Mirae Asset",
  "PagBank",
  "Toro (Santander)",
  "Warren",
  "Andbank",
];

export const MEDIA_CONTENT = [
  // Cartas do Gestor (por Igor Barenboim, Economista-Chefe)
  {
    type: "carta" as const,
    title: "Carta do Gestor — Novo cenário geopolítico e comércio global",
    description:
      "Análise das implicações do novo cenário geopolítico para o comércio global, com foco especial no Brasil e nas novas tarifas impostas pelos EUA.",
    date: "2025-04-01",
    tag: "Carta do Gestor",
    url: "https://www.reachcapital.com.br/carta",
  },
  {
    type: "carta" as const,
    title: "Carta do Gestor — Cenário macroeconômico e desafios",
    description:
      "O cenário macroeconômico atual e seus desafios. Ao final, a visão da Gestão para os fundos da Reach.",
    date: "2025-03-01",
    tag: "Carta do Gestor",
    url: "https://www.reachcapital.com.br/carta",
  },
  {
    type: "carta" as const,
    title: "Carta do Gestor — Um novo momento para a Reach",
    description:
      "Chegada de novos sócios e consolidação como gestora multiestratégia: Renda Variável, Multimercado, Renda Fixa e Crédito Privado.",
    date: "2025-02-01",
    tag: "Carta do Gestor",
    url: "https://www.reachcapital.com.br/carta",
  },
  {
    type: "carta" as const,
    title: "Carta Trimestral — 4T 2024",
    description:
      "Retrospectiva do ano, balanço dos fundos, principais acertos e posicionamento para 2025. Reach FIA: +43,3% em 2024.",
    date: "2025-01-15",
    tag: "Carta do Gestor",
    url: "https://www.reachcapital.com.br/carta",
  },
  // Vídeos, podcasts e entrevistas
  {
    type: "video" as const,
    title: "Ricardo Campos na VEJA: Copom pode acelerar cortes nos juros",
    description:
      "Diego Gimenes entrevista Ricardo Campos, CEO da Reach Capital, sobre perspectivas de política monetária e os possíveis cortes da Selic.",
    date: "2024-10-15",
    tag: "Imprensa",
    url: "#",
  },
  {
    type: "video" as const,
    title: "Podcast Rio Bravo — A abordagem investigativa da Reach Capital",
    description:
      "Ricardo Campos fala sobre o método investigativo da Reach, que vai além do RI das empresas para conversar com conselheiros e membros do conselho fiscal.",
    date: "2024-06-10",
    tag: "Podcast",
    url: "https://soundcloud.com/riobravoinvestimentos/podcast-627-ricardo-campos-a-discreta-e-investigativa-abordagem-da-reach-capital",
  },
  {
    type: "video" as const,
    title: "Reach Capital na Expert XP 2023",
    description:
      "Participação da Reach Capital na Expert XP com conteúdo sobre estratégias de investimento e visão de mercado.",
    date: "2023-08-30",
    tag: "Evento",
    url: "#",
  },
  // Artigos e imprensa
  {
    type: "artigo" as const,
    title: "Compounders: Ricardo Campos e Igor Barenboim",
    description:
      "Perfil dos sócios da Reach Capital — história da fundação da gestora, filosofia de investimento e trajetória desde Hedging-Griffo e Gávea.",
    date: "2023-04-15",
    tag: "Artigo",
    url: "https://clarasodre.substack.com/p/compounders-ricardo-campos-e-igor",
  },
  {
    type: "artigo" as const,
    title: "Igor Barenboim no Valor: Impacto do crédito no crescimento",
    description:
      "Matéria de capa do Valor Econômico com Igor Barenboim comentando o impacto do crédito nas perspectivas de crescimento econômico.",
    date: "2024-03-20",
    tag: "Imprensa",
    url: "#",
  },
  {
    type: "artigo" as const,
    title: "Reach entre os 10 melhores fundos Long Biased em 5 anos",
    description:
      "Ranking destaca Reach Capital entre os 10 melhores fundos Long Biased em janela de 60 meses, período de grandes adversidades para o mercado.",
    date: "2024-07-01",
    tag: "Imprensa",
    url: "#",
  },
  {
    type: "artigo" as const,
    title: "EXAME: 'Juros baixos criaram a perda fixa', diz gestor",
    description:
      "Ricardo Campos fala sobre desmistificar o risco em investimentos e como juros baixos transformaram a renda fixa em 'perda fixa'.",
    date: "2019-11-20",
    tag: "Imprensa",
    url: "https://exame.com/invest/minhas-financas/juros-baixos-criaram-perda-fixa-investidor-precisa-mudar-diz-gestor/",
  },
];

export const DISCLAIMER =
  "Rentabilidade passada não representa garantia de resultados futuros. A rentabilidade divulgada não é líquida de impostos. Fundos de investimento não contam com garantia do administrador, do gestor, de qualquer mecanismo de seguro ou Fundo Garantidor de Crédito – FGC. Leia o prospecto e o regulamento antes de investir. A Reach Capital Investimentos não comercializa nem distribui cotas de fundos de investimento. As informações contidas neste site são de caráter meramente informativo e não constituem qualquer tipo de aconselhamento de investimentos.";
