import { motion } from "framer-motion";
import { SERVICES } from "../data/content.jsx";
import { fadeUp, staggerFast, viewport } from "../lib/motion.js";
import { useLang } from "../i18n/LangProvider.jsx";

export default function Services() {
  const { t } = useLang();
  return (
    <section className="section" id="services">
      <div className="container">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="lead">{t.services.lead}</p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const item = t.services.items[i];
            return (
              <motion.article
                className="service-card"
                key={s.title}
                variants={fadeUp}
              >
                <span className="service-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="service-icon">
                  <Icon width={26} height={26} />
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
