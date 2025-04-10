import { motion } from "motion/react"
import * as variants from "@/lib/motionVariants"
import { processData } from "@/constants"





const Process = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
                  <motion.p 
                    variants={variants.fadeInUp}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="section-subtitle"
                  >
                    {processData.sectionSubtitle}
                  </motion.p>
        
                  <motion.h2 
                    variants={variants.fadeInUp}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="section-title"
                  >
                    {processData.sectionTitle}
                  </motion.h2>
        
                  <motion.p 
                    variants={variants.fadeInUp}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="section-text"
                  >
                    {processData.sectionText}
                  </motion.p>
                </div>
      </div>
    </section>
  )
}

export default Process