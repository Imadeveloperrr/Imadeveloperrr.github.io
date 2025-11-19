import { motion } from 'framer-motion';
import { slideInVariants } from '../../constants/animations';

function SlideIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={slideInVariants}
      transition={{ delay: 0, duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export default SlideIn;
