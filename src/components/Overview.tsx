import { motion } from "motion/react"
import * as variants from "@/lib/motionVariants"
import { overviewData } from "@/constants"
import { overviewBanner } from "@/assets"
import { Play } from "lucide-react"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "./ui/aspect-ratio"
import ReactPlayer from "react-player"


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
          <motion.div className="relative max-w-4xl mx-auto shadow-xl">
            <figure>
              <img 
                src={overviewBanner} 
                alt="overview-banner" 
                width={900} 
                height={601} 
              />
            </figure>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150"
                >
                  <div className="sr-only">Play Video</div>
                  <Play
                    fill="#fff"
                    size={50}
                  />
                </Button>
              </DialogTrigger>

              <DialogContent className="p-0 overflow-hidden max-w-[640px] xl:max-w-[1000px]">
                <AspectRatio ratio={16 / 9}>
                  <ReactPlayer
                    url="https://youtu.be/cvd2XGJBgLg"
                    style={{
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                  />
                </AspectRatio>
              </DialogContent>
            </Dialog> 
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-5 mt-8 md:mt-16">
            <motion.p>
              {overviewData.listTitle}
            </motion.p>

            <motion.div>
              {overviewData.list.map(({ title, text }, index) => (
                <div key={index} className="">
                  <h3>{title}</h3>

                  <p>{text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview