import { motion } from "framer-motion";
import { fadeUp, scaleIn, viewport } from "../lib/motion.js";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <motion.div
          className="about-visual"
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <div className="about-pattern" />
          <img className="mark" src="/assets/brand/logo-purple.svg" alt="Lavert" />
          <div className="est">
            2024
            <span>Established</span>
          </div>
        </motion.div>

        <motion.div
          className="about-body"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="eyebrow">Who We Are</span>
          <h2 className="section-title" style={{ marginBottom: "1.4rem" }}>
            A creative agency where creativity feels natural
          </h2>

          <p className="story-lead">
            Lavert was created for brands that want more than simple design.
          </p>

          <p>
            We believe every brand has a personality, a feeling, and a story that
            should be shown clearly. Some brands need a stronger identity. Some
            need better content. Others need a complete visual direction that
            makes them look more professional and memorable.
          </p>
          <p>
            Our name is inspired by <strong>lavender, nature, calmness, and
            elegance</strong>. This feeling shapes the way we create: balanced,
            refined, clean, and full of intention. We don&apos;t design randomly —
            we understand the brand, study the audience, build the direction, and
            create visuals that support growth.
          </p>
          <p>
            Based in <strong>Jeddah, Saudi Arabia</strong>, we work with
            businesses that want to improve their image, organize their visual
            presence, and communicate with their audience in a more professional
            way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
