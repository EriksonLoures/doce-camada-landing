"use client";
import { useState } from "react";
import { products, waLink } from "../data/site";

function Card({ p }) {
  const [sel, setSel] = useState(() =>
    Object.fromEntries(p.options.map((o) => [o.label, o.choices[0]]))
  );
  const msg =
    `Olá! Quero encomendar: ${p.name}\n` +
    p.options.map((o) => `${o.label}: ${sel[o.label]}`).join("\n");

  return (
    <article className="card">
      {p.image ? (
        <img src={p.image} alt={p.name} loading="lazy" />
      ) : (
        <div className="noimg" aria-hidden="true">100g</div>
      )}
      <div className="body">
        <h3>{p.name}</h3>
        <ul className="layers">
          {p.layers.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
        {p.options.map((o) => (
          <fieldset key={o.label}>
            <legend>{o.label}</legend>
            <div className="pills">
              {o.choices.map((c) => (
                <label key={c}>
                  <input
                    type="radio"
                    name={`${p.id}-${o.label}`}
                    checked={sel[o.label] === c}
                    onChange={() => setSel({ ...sel, [o.label]: c })}
                  />
                  <span>{c}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
        <a className="btn" href={waLink(msg)} target="_blank" rel="noopener noreferrer">
          Pedir no WhatsApp
        </a>
      </div>
    </article>
  );
}

export default function Menu() {
  return (
    <div className="grid">
      {products.map((p) => (
        <Card key={p.id} p={p} />
      ))}
    </div>
  );
}
