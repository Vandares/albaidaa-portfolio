import { motion } from "framer-motion";
import { WHY } from "../data/content.jsx";
import { fadeUp, staggerFast, viewport } from "../lib/motion.js";
import { useLang } from "../i18n/LangProvider.jsx";

export default function WhyUs() {
  const { t } = useLang();
  return (
    <section className="section why">
      <div className="container">
        <motion.div
          className="section-head center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="eyebrow">{t.why.eyebrow}</span>
          <h2 className="section-title">{t.why.title}</h2>
          <p className="lead">{t.why.lead}</p>
        </motion.div>

        <motion.div
          className="why-grid"
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {WHY.map((w, i) => {
            const Icon = w.icon;
            const item = t.why.items[i];
            return (
              <motion.article className="why-card" key={w.title} variants={fadeUp}>
                <div className="why-ic">
                  <Icon width={22} height={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
