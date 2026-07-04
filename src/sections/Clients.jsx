import { motion } from "framer-motion";
import { fadeUp, scaleIn, viewport } from "../lib/motion.js";

export default function Clients() {
  return (
    <section className="section" id="clients" style={{ paddingBlock: "clamp(3rem,7vw,5rem)" }}>
      <div className="container">
        <motion.div
          className="section-head center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="eyebrow">Trusted By Brands</span>
          <h2 className="section-title">Brands we&apos;ve worked with</h2>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          style={{
            background: "var(--white)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid rgba(100,86,85,0.08)",
            boxShadow: "var(--shadow-sm)",
            padding: "clamp(1.5rem, 4vw, 3rem)",
          }}
        >
          <img
            src="/assets/clients/brands.png"
            alt="Logos of brands Lavert has worked with, including Formula 1, Islamic Development Bank, SOL Beach Resort, and more"
            loading="lazy"
            decoding="async"
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
