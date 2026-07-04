import { motion } from "framer-motion";
import { Arrow, Sparkle, Camera } from "../lib/icons.jsx";
import { fadeUp, stagger } from "../lib/motion.js";

export default function Hero() {
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
            <span className="dot" /> Creative Marketing Agency · Jeddah
          </motion.span>

          <motion.h1 variants={fadeUp}>
            Creative by <em>Nature</em>
            <span className="tm">™</span>
          </motion.h1>

          <motion.p className="hero-sub" variants={fadeUp}>
            Lavert is a creative marketing agency that builds brands through
            strategy, design, photography, videography, and digital content.
          </motion.p>

          <motion.p className="hero-desc" variants={fadeUp}>
            We help brands look professional, communicate clearly, and grow with
            confidence through creative visuals, strong identity, and consistent
            marketing content.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp}>
            <a href="#contact" className="btn btn-primary">
              Start a Project <Arrow className="btn-arrow" width={18} height={18} />
            </a>
            <a href="#work" className="btn btn-ghost">
              View Our Work
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={fadeUp}>
            <div>
              <div className="num">+50</div>
              <div className="lbl">Creative Projects</div>
            </div>
            <div>
              <div className="num">+20</div>
              <div className="lbl">Brands Supported</div>
            </div>
            <div>
              <div className="num">2024</div>
              <div className="lbl">Established</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <motion.div
            className="hero-card"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-pattern" />
            <img className="mark" src="/assets/brand/logo-white.svg" alt="Lavert" />
            <div className="card-tag">
              <span>CREATIVE BY NATURE</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-float top"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="ic">
              <Sparkle width={18} height={18} />
            </span>
            Brand Identity
          </motion.div>

          <motion.div
            className="hero-float bottom"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="ic">
              <Camera width={18} height={18} />
            </span>
            Photo &amp; Video
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
