import { Gloock, Figtree } from "next/font/google";
import "./globals.css";
import { site } from "../data/site";

const display = Gloock({ subsets: ["latin"], weight: "400", variable: "--display" });
const body = Figtree({ subsets: ["latin"], variable: "--body" });

export const metadata = {
  title: `${site.name} — tortas e doces em camadas`,
  description: "Tortas, bombons abertos, taças e biscoitos feitos por encomenda. Peça pelo WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
