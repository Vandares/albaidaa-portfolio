import { motion } from "framer-motion";
import { PROCESS } from "../data/content.jsx";
import { fadeUp, viewport } from "../lib/motion.js";

const EASE = [0.22, 1, 0.36, 1];

const gridStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
};

const stepIn = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const popIn = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

const growY = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.6, ease: EASE } },
};

const bodyIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

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
          variants={gridStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* desktop connector — draws itself across as the numbers pop in */}
          <motion.span
            className="process-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.35, ease: EASE, delay: 0.25 }}
            aria-hidden="true"
          />

          {PROCESS.map((p, i) => (
            <motion.div className="process-step" key={p.title} variants={stepIn}>
              <div className="process-rail">
                <motion.span className="process-num" variants={popIn}>
                  {i + 1}
                </motion.span>
                {i < PROCESS.length - 1 && (
                  <motion.span
                    className="process-seg"
                    variants={growY}
                    aria-hidden="true"
                  />
                )}
              </div>
              <motion.div className="process-body" variants={bodyIn}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
