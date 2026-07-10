import { motion } from "framer-motion";
import WorkDeck from "../components/WorkDeck.jsx";
import { Arrow } from "../lib/icons.jsx";
import { fadeUp, stagger } from "../lib/motion.js";
import { useLang } from "../i18n/LangProvider.jsx";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="hero section" id="home">
      <div className="hero-pattern" />
      <div className="hero-glow one" />
      <div className="hero-glow two" />

      <div className="container hero-inner">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="hero-copy"
        >
          <motion.span className="hero-badge" variants={fadeUp}>
            <span className="dot" /> {t.hero.badge}
          </motion.span>

          <motion.h1 variants={fadeUp}>
            {t.hero.h1a}
            <em>{t.hero.h1em}</em>
            <span className="tm">™</span>
          </motion.h1>

          <motion.p className="hero-sub" variants={fadeUp}>
            {t.hero.sub}
          </motion.p>

          <motion.p className="hero-desc" variants={fadeUp}>
            {t.hero.desc}
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp}>
            <a href="#contact" className="btn btn-primary">
              {t.hero.ctaPrimary} <Arrow className="btn-arrow" width={18} height={18} />
            </a>
            <a href="#work" className="btn btn-ghost">
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={fadeUp}>
            {t.hero.stats.map((s) => (
              <div key={s.lbl}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="hero-visual">
          <WorkDeck />
        </div>
      </div>
    </section>
  );
}
