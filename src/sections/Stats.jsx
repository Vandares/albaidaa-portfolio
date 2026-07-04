import { motion } from "framer-motion";
import CountUp from "../components/CountUp.jsx";
import { STATS } from "../data/content.jsx";
import { fadeUp, staggerFast, viewport } from "../lib/motion.js";

export default function Stats() {
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
        {STATS.map((s) => (
          <motion.div className="stat" key={s.label} variants={fadeUp}>
            <div className="stat-num">
              <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="stat-lbl">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
