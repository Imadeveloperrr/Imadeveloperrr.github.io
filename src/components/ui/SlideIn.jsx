import { motion } from 'framer-motion';
import { slideInVariants } from '../../constants/animations';

function SlideIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default SlideIn;
