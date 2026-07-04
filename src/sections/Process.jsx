import { motion } from "framer-motion";
import { PROCESS } from "../data/content.jsx";
import { fadeUp, stagger, viewport } from "../lib/motion.js";

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <motion.div
          className="section-head center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="eyebrow">Our Process</span>
          <h2 className="section-title">How we bring brands to life</h2>
          <p className="lead">
            A clear, five-step path from understanding your brand to launching
            polished, professional work.
          </p>
        </motion.div>

        <motion.div
          className="process-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {PROCESS.map((p, i) => (
            <motion.div className="process-step" key={p.title} variants={fadeUp}>
              <span className="process-num">{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
