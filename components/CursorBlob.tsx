import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorBlob = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-60 h-60 bg-[var(--color-primary)] rounded-full blur-3xl opacity-18 pointer-events-none z-0"
      animate={{ x: position.x - 64, y: position.y - 64 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5,
      }}
    />
  );
};

export default CursorBlob;
