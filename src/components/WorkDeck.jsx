import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const CARDS = [
  { img: "/assets/hero/card-campaign.jpg", title: "Sol Beach Resort", tag: "Campaign" },
  { img: "/assets/hero/card-food.jpg", title: "Food Visuals", tag: "Photography" },
  { img: "/assets/hero/card-social.jpg", title: "Circles Donuts", tag: "Social Media" },
  { img: "/assets/hero/card-brand.jpg", title: "Visual Identity", tag: "Branding" },
  { img: "/assets/hero/card-night.jpg", title: "After Dark", tag: "Videography" },
];

// fan positions, front → back
const POS = [
  { x: 0, y: 0, r: -4, s: 1, z: 50, o: 1 },
  { x: 32, y: -10, r: 3, s: 0.96, z: 40, o: 1 },
  { x: 62, y: -20, r: 9, s: 0.92, z: 30, o: 1 },
  { x: 90, y: -30, r: 15, s: 0.88, z: 20, o: 0.95 },
  { x: 116, y: -40, r: 21, s: 0.84, z: 10, o: 0.9 },
];

export default function WorkDeck() {
  const [order, setOrder] = useState([0, 1, 2, 3, 4]);
  const [flying, setFlying] = useState(null);
  const [spread, setSpread] = useState(1);
  const reduced = useReducedMotion();
  const wrapRef = useRef(null);
  const orderRef = useRef(order);
  orderRef.current = order;

  // shrink the fan spread on narrow screens so cards stay inside the viewport
  useEffect(() => {
    const update = () => setSpread(window.innerWidth < 640 ? 0.5 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // auto-shuffle: front card slides out and tucks behind
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      if (document.hidden) return;
      const o = orderRef.current;
      const front = o[0];
      setFlying(front);
      setOrder([...o.slice(1), front]);
      setTimeout(() => setFlying((f) => (f === front ? null : f)), 950);
    }, 3800);
    return () => clearInterval(id);
  }, [reduced]);

  // 3D tilt toward the cursor (mouse only)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 140,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 140,
    damping: 18,
  });

  const onMove = (e) => {
    if (e.pointerType !== "mouse" || reduced) return;
    const r = wrapRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={wrapRef}
      className="deck-wrap"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      initial={{ opacity: 0, scale: 0.88, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
    >
      <motion.div className="deck" style={{ rotateX, rotateY }}>
        {CARDS.map((c, idx) => {
          const pos = order.indexOf(idx);
          const p = POS[pos];
          const isFlying = flying === idx;
          return (
            <motion.a
              key={c.img}
              href="#work"
              className="deck-card"
              aria-label={`${c.title} — view our work`}
              animate={{
                x: isFlying ? [null, 170 * spread, p.x * spread] : p.x * spread,
                y: isFlying ? [null, -60 * spread, p.y * spread] : p.y * spread,
                rotate: isFlying ? [null, 24, p.r] : p.r,
                scale: p.s,
                opacity: p.o,
                zIndex: isFlying ? [60, 60, p.z] : p.z,
              }}
              transition={
                isFlying
                  ? { duration: 0.9, times: [0, 0.45, 1], ease: EASE }
                  : { type: "spring", stiffness: 240, damping: 26 }
              }
            >
              <img src={c.img} alt="" draggable="false" />
              <motion.span
                className="deck-label"
                animate={{ opacity: pos === 0 ? 1 : 0, y: pos === 0 ? 0 : 8 }}
                transition={{ duration: 0.35, ease: EASE, delay: pos === 0 ? 0.3 : 0 }}
              >
                <strong>{c.title}</strong>
                <em>{c.tag}</em>
              </motion.span>
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
