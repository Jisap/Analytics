import { motion } from "motion/react"
import * as variants from "@/lib/motionVariants"
import { ctaData } from "@/constants"
import { Button } from "./ui/button"
import { ctaBanner } from "@/assets"



const Cta = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.div className="bg-primary rounded-xl border-t border-primary-foreground/30 overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr,0.7fr] lg:items-center">
          <div className="p-8 md:p-16 xl:p-20">
            <motion.h2
              className="text-[26px] leading-tight font-semibold mb-6 capitalize sm:text-[34px] md:text-[40px] lg:text-[46px] lg:mb-10"
            >
              {ctaData.text}
            </motion.h2>

            <motion.div>
              <Button>Free Trial</Button>
              <Button
                variant="outline"
                className=""
              >
                Pricing & Plans
              </Button>
            </motion.div>
          </div>

          <motion.figure>
            <img src={ctaBanner} alt="" />
          </motion.figure>
        </motion.div>
      </div>

    </section>
  )
}

export default Cta