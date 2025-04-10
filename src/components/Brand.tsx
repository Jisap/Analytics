import { brands } from "@/assets"
import { motion } from "motion/react"
import * as variants from "@/lib/motionVariants"

const Brand = () => {
  return (
    <section className="section">
      <div  className="container max-w-screen-lg">
        <motion.p
          variants={variants.fadeInUp} 
          initial="start"
          animate="end"
          whileInView="end"
          viewport={{ once: true }}
          className="text-center mb-4 md:mb-6"
        >
          Powering data insights for today&apos;s startup and tomorrow&apos;s keader.
        </motion.p>

        <motion.div 
          variants={variants.staggerContainer}
          initial="start"
          animate="end"
          whileInView="end"
          viewport={{ once: true }}  
          className="flex justify-center flex-wrap gap-5 md:gap-10"
        >
          {brands.map((brand, index) => (
            <motion.figure 
              key={index}
              variants={variants.fadeInUp}
              
            >
              <img 
                src={brand}
                alt="" 
                className="opacity-[0.6]"
              />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Brand