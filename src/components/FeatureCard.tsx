import { JSX } from "react";
import { motion } from "motion/react";
import * as variants from "@/lib/motionVariants"

type FeatureCardProps = {
  classes?: string;
  children?: JSX.Element;
}


const FeatureCard = ({ classes, children }: FeatureCardProps) => {
  return (
    <motion.div 
      variants={variants.staggerContainer}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className={`relative overflow-hidden p-[1px] ring ring-inset ring-zinc-800/50 rounded-[14px] ${ classes }`}>
      <motion.div className="relative isolate bg-card backdrop-blur-md rounded-xl overflow-hidden">
        {children}
      </motion.div>
    </motion.div>
  )
}

export default FeatureCard