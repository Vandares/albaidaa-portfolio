import { motion } from "framer-motion";
import { SERVICES } from "../data/content.jsx";
import { fadeUp, staggerFast, viewport } from "../lib/motion.js";

export default function Services() {
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
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">
            Creative services that make brands look their best
          </h2>
          <p className="lead">
            From identity to content to print — everything your brand needs to
            communicate clearly and grow with confidence.
          </p>
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
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
