import { motion } from "framer-motion";
import CountUp from "../components/CountUp.jsx";
import { STATS } from "../data/content.jsx";
import { fadeUp, staggerFast, viewport } from "../lib/motion.js";
import { useLang } from "../i18n/LangProvider.jsx";

export default function Stats() {
  const { t } = useLang();
  return (
    <section className="section stats">
      {/* Living brand world, colour-graded dark so the white figures keep
          their contrast. Decorative; hidden under prefers-reduced-motion,
          where the purple gradient below it remains. */}
      <video
        className="stats-video"
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/brand/brand-world-dark-poster.jpg"
      >
        <source src="/assets/brand/brand-world-dark.webm" type="video/webm" />
        <source src="/assets/brand/brand-world-dark.mp4" type="video/mp4" />
      </video>
      <div className="stats-veil" aria-hidden="true" />
      <div className="stats-pattern" />
      <motion.div
        className="container stats-grid"
        variants={staggerFast}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        {STATS.map((s, i) => (
          <motion.div className="stat" key={s.label} variants={fadeUp}>
            <div className="stat-num">
              <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="stat-lbl">{t.stats.labels[i]}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
