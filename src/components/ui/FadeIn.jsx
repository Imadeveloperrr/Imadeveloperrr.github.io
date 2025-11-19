import { motion } from 'framer-motion'
import { fadeInVariants } from '../../constants/animations'

function FadeIn( { children, delay = 0} ) {
return (
    <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ delay, duration: 0.5 }}
    >
    
    {children}
    </motion.div>
    );
}

export default FadeIn;