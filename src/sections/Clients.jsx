import { motion } from "framer-motion";
import { fadeUp, viewport } from "../lib/motion.js";
import { useLang } from "../i18n/LangProvider.jsx";

const LOGOS = [
  ["formula1", "Formula 1"],
  ["isdb", "Islamic Development Bank"],
  ["sol", "SOL Beach Resort"],
  ["bna", "BNA"],
  ["shades", "Shades Beach"],
  ["adahi", "Adahi"],
  ["nightshift", "Night Shift"],
  ["circles", "Circles Gourmet Donuts"],
  ["padel", "Padel Court"],
  ["velvet", "Velvet Care Clinics"],
  ["nova", "Nova"],
  ["shawarma", "Shawarma Al Taam"],
  ["mervat", "Mervat"],
  ["almawj", "Almawj Clinic Group"],
  ["sky", "Sky Clinic"],
  ["hosn", "Hosn Al Raeda"],
  ["abc", "ABC Gourmet Donuts"],
  ["leos", "Leos"],
];

function Half({ hidden }) {
  return (
    <div className="marquee-half" aria-hidden={hidden || undefined}>
      {LOGOS.map(([file, name]) => (
        <div className="logo-chip" key={file}>
          <img
            src={`/assets/clients/logos/${file}.png`}
            alt={hidden ? "" : name}
            loading="eager"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}

export default function Clients() {
  const { t } = useLang();
  return (
    <section
      className="section"
      id="clients"
      style={{ paddingBlock: "clamp(3rem,7vw,5rem)" }}
    >
      <div className="container">
        <motion.div
          className="section-head center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          style={{ marginBottom: "clamp(1.8rem, 4vw, 2.6rem)" }}
        >
          <span className="eyebrow">{t.clients.eyebrow}</span>
          <h2 className="section-title">{t.clients.title}</h2>
        </motion.div>
      </div>

      <motion.div
        className="marquee"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <div className="marquee-track">
          <Half />
          <Half hidden />
        </div>
      </motion.div>
    </section>
  );
}
