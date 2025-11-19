import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../../constants/animations';

function AnimatedPage( { children }) {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedPage;