import { JSX } from "react";
import { motion } from "motion/react";

type FeatureCardProps = {
  classes?: string;
  children?: JSX.Element;
}


const FeatureCard = ({ classes, children }: FeatureCardProps) => {
  return (
    <motion.div className={`${ classes }`}>
      <motion.div>
        {children}
      </motion.div>
    </motion.div>
  )
}

export default FeatureCard