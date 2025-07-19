import { motion } from "framer-motion";
import type { ReactNode } from "react";

const FloatingElement = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export default FloatingElement;
