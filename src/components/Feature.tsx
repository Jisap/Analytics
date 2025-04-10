import { featureData } from "@/constants"
import { motion } from "motion/react"
import FeatureCard from "./FeatureCard"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"





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
            <FeatureCard key={index}>
              <>
                <div>
                  <motion.div className={`${iconBoxColor}`}>
                    {icon}
                  </motion.div>

                  <motion.h3>
                    {title}
                  </motion.h3>

                  <motion.p>
                    {desc}
                  </motion.p>

                  <motion.div>
                    <Button variant="link" className="">
                      Learn More <ArrowRight />
                    </Button>
                  </motion.div>
                </div>

                {imgSrc && (
                  <motion.figure>
                    <img src={imgSrc} alt={title} className="img-cover" />
                  </motion.figure>
                )}
              </>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature