import { motion } from 'framer-motion'
import { fadeInVariants } from '../../constants/animations'

function FadeIn( { children, delay = 0} ) {
return (
    <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fadeInVariants}
        transition={{ delay: 0, duration: 0.2 }}
    >

    {children}
    </motion.div>
    );
}

export default FadeIn;