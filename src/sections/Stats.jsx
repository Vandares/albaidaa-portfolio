import { motion } from "framer-motion";
import CountUp from "../components/CountUp.jsx";
import { STATS } from "../data/content.jsx";
import { fadeUp, staggerFast, viewport } from "../lib/motion.js";
import { useLang } from "../i18n/LangProvider.jsx";

export default function Stats() {
  const { t } = useLang();
  return (
    <section className="section stats">
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
