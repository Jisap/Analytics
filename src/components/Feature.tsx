import { featureData } from "@/constants"
import { motion } from "motion/react"





const Feature = () => {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <motion.p className="section-subtitle">
            {featureData.sectionSubtitle}
          </motion.p>

          <motion.h2 className="section-title">
            {featureData.sectionTitle}
          </motion.h2>

          <motion.p className="section-text">
            {featureData.sectionText}

          </motion.p>
        </div>

        <div>
          {featureData.features.map(({ icon, iconBoxColor, title, desc, imgSrc }, index) => (
            <div>
              Feature Card
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature