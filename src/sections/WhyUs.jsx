import { motion } from "framer-motion";
import { WHY } from "../data/content.jsx";
import { fadeUp, staggerFast, viewport } from "../lib/motion.js";

export default function WhyUs() {
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
          <span className="eyebrow">Why Choose Lavert</span>
          <h2 className="section-title">Creativity with intention</h2>
          <p className="lead">
            We don&apos;t just make things look good — we help your brand appear
            stronger, clearer, and more trusted.
          </p>
        </motion.div>

        <motion.div
          className="why-grid"
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {WHY.map((w) => {
            const Icon = w.icon;
            return (
              <motion.article className="why-card" key={w.title} variants={fadeUp}>
                <div className="why-ic">
                  <Icon width={22} height={22} />
                </div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
