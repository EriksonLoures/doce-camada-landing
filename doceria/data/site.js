// Edite aqui: nome, WhatsApp e cardápio.
export const site = {
  name: "Doce Camada",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "5531988685442",
  instagram: "",
};

export const waLink = (text) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

const tamanho = {
  label: "Tamanho",
  choices: ["Pequena (serve 6 a 8 pessoas)", "Média (serve 12 a 15 pessoas)"],
};

export const products = [
  {
    id: "banoffee",
    name: "Torta Banoffee",
    image: "/images/banoffee.jpg",
    layers: [
      "Canela ou cacau para decorar",
      "Chantilly",
      "Banana",
      "Creme de doce de leite",
      "Crocante de biscoito Tostines",
    ],
    options: [
      tamanho,
      { label: "Para decorar", choices: ["Canela", "Cacau"] },
    ],
  },
  {
    id: "bombom-morango",
    name: "Bombom aberto de morango",
    image: "/images/bombom-morango.jpg",
    layers: [
      "Morangos",
      "Mousse de chocolate ao leite",
      "Mousse de chocolate branco",
      "Pedaços de brownie",
    ],
    options: [tamanho],
  },
  {
    id: "bombom-uva",
    name: "Bombom aberto de uva",
    image: "/images/bombom-uva.jpg",
    layers: [
      "Uvas",
      "Mousse de chocolate ao leite",
      "Mousse de chocolate branco",
      "Pedaços de brownie",
    ],
    options: [tamanho],
  },
  {
    id: "red-velvet",
    name: "Taça Red Velvet",
    image: "/images/red-velvet.jpg",
    layers: [
      "Morangos para decorar",
      "Bolo red velvet",
      "Mousse de leite Ninho",
      "Geleia de frutas vermelhas",
    ],
    options: [tamanho],
  },
  {
    id: "biscoito-tradicional",
    name: "Biscoito Amanteigado Tradicional",
    image: "/images/biscoito-tradicional.jpg",
    layers: ["Manteiga de qualidade", "Massa amanteigada artesanal", "Embalados em saquinho ou caixinha de 100g"],
    options: [
      { label: "Canela", choices: ["Sem canela", "Com canela"] },
      { label: "Decoração", choices: ["Sem decoração", "Com decoração"] },
      { label: "Embalagem", choices: ["Saquinho 100g", "Caixinha 100g"] },
    ],
  },
  {
    id: "biscoito-doce-de-leite",
    name: "Biscoito Amanteigado de Doce de Leite",
    image: "/images/biscoito-decorado.jpg",
    layers: ["Recheio de doce de leite", "Massa amanteigada artesanal", "Embalados em saquinho ou caixinha de 100g"],
    options: [
      { label: "Canela", choices: ["Sem canela", "Com canela"] },
      { label: "Decoração", choices: ["Sem decoração", "Com decoração"] },
      { label: "Embalagem", choices: ["Saquinho 100g", "Caixinha 100g"] },
    ],
  },
];
