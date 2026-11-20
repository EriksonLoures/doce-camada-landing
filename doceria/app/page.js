import Menu from "../components/Menu";
import { site, waLink } from "../data/site";

export default function Home() {
  const hello = waLink("Olá! Gostaria de fazer uma encomenda.");
  return (
    <>
      <header className="top">
        <strong className="brand">{site.name}</strong>
        <nav>
          <a href="#cardapio">Cardápio</a>
          <a className="btn small" href={hello} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div>
            <h1>Doces em camadas, feitos por encomenda.</h1>
            <p>Tortas, bombons abertos, taças e biscoitos. Escolha o tamanho e peça direto pelo WhatsApp.</p>
            <div className="cta">
              <a className="btn" href="#cardapio">Ver cardápio</a>
              <a className="btn ghost" href={hello} target="_blank" rel="noopener noreferrer">Falar com a gente</a>
            </div>
          </div>
          <img className="hero-img" src="/images/bombom-morango.jpg" alt="Bombom aberto de morango com mousse de chocolate" />
        </section>

        <section id="cardapio" className="menu">
          <h2>Cardápio</h2>
          <p className="note">Tortas e bombons abertos: <strong>pequena</strong> serve 6 a 8 pessoas · <strong>média</strong> serve 12 a 15 pessoas. Biscoitos em saquinho ou caixinha de 100g. Escolha as opções e o pedido vai pronto para o WhatsApp.</p>
          <Menu />
        </section>
      </main>

      <footer>
        <p>Encomendas pelo WhatsApp.</p>
        <a className="btn" href={hello} target="_blank" rel="noopener noreferrer">Fazer encomenda</a>
      </footer>
    </>
  );
}
