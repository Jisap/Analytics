import { motion } from "motion/react"
import * as variants from "@/lib/motionVariants"
import { ctaData } from "@/constants"
import { Button } from "./ui/button"
import { ctaBanner } from "@/assets"



const Cta = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="">
          <motion.h2>
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
      </div>

    </section>
  )
}

export default Cta