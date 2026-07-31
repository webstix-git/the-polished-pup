"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Pre-built motion tags — created once so elements are never remounted mid-animation. */
const tags = {
  div: motion.div,
  section: motion.section,
  ul: motion.ul,
  li: motion.li,
  article: motion.article,
  figure: motion.figure,
  p: motion.p,
  h2: motion.h2,
} as const;

export type RevealTag = keyof typeof tags;

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  distance = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: RevealTag;
  distance?: number;
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = tags[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export function Stagger({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
}) {
  const MotionTag = tags[as];

  return (
    <MotionTag
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = tags[as];

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <MotionTag className={className} variants={item}>
      {children}
    </MotionTag>
  );
}
