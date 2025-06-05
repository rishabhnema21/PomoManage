import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeIn = ({ children, delay = 0, duration = 0.6, y = 30 }) => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn