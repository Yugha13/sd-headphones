"use client";
import { motion, HTMLMotionProps } from "framer-motion";

interface FadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  y?: number;
}

export default function FadeUp({ delay = 0, y = 24, children, ...props }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
