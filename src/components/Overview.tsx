import { motion } from "motion/react"
import * as variants from "@/lib/motionVariants"
import { overviewData } from "@/constants"
import { overviewBanner } from "@/assets"
import { Play } from "lucide-react"
import { Button } from "./ui/button"



const Overview = () => {
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
            {overviewData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="section-title"
          >
            {overviewData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="section-text"
          >
            {overviewData.sectionText}

          </motion.p>
        </div>

        <div>
          <motion.div>
            <figure>
              <img 
                src={overviewBanner} 
                alt="overview-banner" 
                width={900} 
                height={601} 
              />
            </figure>

            <Button>
              <Play />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Overview