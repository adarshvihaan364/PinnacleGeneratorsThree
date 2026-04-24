import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function MagneticButton({ children, className = "", onClick, href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.35, y: middleY * 0.35 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const content = (
    <motion.div
      style={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative z-10"
    >
      {children}
    </motion.div>
  );

  const wrapperProps = {
    ref,
    onMouseMove: handleMouse,
    onMouseLeave: reset,
    className: `relative inline-flex items-center justify-center ${className}`,
    onClick,
  };

  if (href) {
    return (
      <a href={href} {...wrapperProps}>
        {content}
        <motion.div
          className="absolute inset-0 z-0 rounded-full bg-brand/10 opacity-0 transition-opacity group-hover:opacity-100"
          animate={{ x: x * 0.5, y: y * 0.5 }}
        />
      </a>
    );
  }

  return (
    <div {...wrapperProps}>
      {content}
      <motion.div
        className="absolute inset-0 z-0 rounded-full bg-brand/10 opacity-0 transition-opacity group-hover:opacity-100"
        animate={{ x: x * 0.5, y: y * 0.5 }}
      />
    </div>
  );
}
