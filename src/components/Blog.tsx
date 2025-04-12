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
import { Badge } from "./ui/badge"
import { 
  Avatar,
  AvatarImage,
  AvatarFallback 
} from "./ui/avatar"



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
        </div>

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
              <Card>
                <CardHeader>
                  <figure>
                    <img 
                      src={imgSrc} 
                      alt={title} 
                    /> 
                  </figure>
                </CardHeader>

                <CardContent>
                  <Badge>{badge}</Badge>

                  <CardTitle>
                    <a href="#">
                      {title}
                    </a>
                  </CardTitle>
                </CardContent>

                <CardFooter>
                  <Avatar>
                    <AvatarImage src={avatarSrc} />
                    <AvatarFallback>{authorName}</AvatarFallback>
                  </Avatar>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Blog