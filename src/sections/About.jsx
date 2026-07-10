import { motion } from "framer-motion";
import { fadeUp, scaleIn, viewport } from "../lib/motion.js";
import { useLang } from "../i18n/LangProvider.jsx";

export default function About() {
  const { t } = useLang();
  const a = t.about;
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
            {a.est}
            <span>{a.estLabel}</span>
          </div>
        </motion.div>

        <motion.div
          className="about-body"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="eyebrow">{a.eyebrow}</span>
          <h2 className="section-title" style={{ marginBottom: "1.4rem" }}>
            {a.title}
          </h2>

          <p className="story-lead">{a.storyLead}</p>

          <p>{a.p1}</p>
          <p>
            {a.p2.a}
            <strong>{a.p2.strong}</strong>
            {a.p2.b}
          </p>
          <p>
            {a.p3.a}
            <strong>{a.p3.strong}</strong>
            {a.p3.b}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
