import { motion } from "motion/react"
import * as variants from "@/lib/motionVariants"
import { reviewData } from "@/constants"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Quote } from "lucide-react"



const Review = () => {
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
            {reviewData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="section-title"
          >
            {reviewData.sectionTitle}
          </motion.h2>
        </div>

        <motion.div>
          {reviewData.reviewCard.map(({title, text, reviewAuthor, date}, index) => (
            <motion.div key={index}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    {title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p>
                    {text}
                  </p>
                </CardContent>

                <CardFooter>
                  <p>
                    {reviewAuthor}
                  </p>

                  <p>{date}</p>
                </CardFooter>

                <div>
                  <Quote size={80}/>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Review