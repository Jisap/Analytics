import { motion } from "motion/react"
import * as variants from "@/lib/motionVariants"
import { blogData } from "@/constants"
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardTitle, 
  CardFooter 
} from "./ui/card"


const Blog = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="section-head">
          <motion.p
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="section-subtitle"
          >
            {blogData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="section-title"
          >
            {blogData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="section-text"
          >
            {blogData.sectionText}
          </motion.p>

          <motion.div>
            {blogData.blogs.map(({
              imgSrc,
              badge,
              title,
              author: {
                avatarSrc,
                authorName,
                publishDate,
                readingTime,
              },
            }, index) => (
              <motion.div key={index}>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Blog