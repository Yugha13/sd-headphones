"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  containerClassName?: string;
}

export default function WordsPullUpMultiStyle({ segments, containerClassName = "" }: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Flatten segments into an array of words, retaining their parent's className
  const wordsList = segments.flatMap((segment) =>
    segment.text.split(" ").map((word) => ({
      word,
      className: segment.className || "",
    }))
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={`inline-flex flex-wrap justify-center ${containerClassName}`}
    >
      {wordsList.map((obj, i) => (
        <span key={i} className="relative inline-flex overflow-hidden">
          <motion.span variants={item} className={`inline-block ${obj.className}`}>
            {obj.word}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
