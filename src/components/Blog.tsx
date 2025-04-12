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

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
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
              <Card className="group">
                <CardHeader>
                  <figure className="rounded-lg overflow-hidden">
                    <img
                      src={imgSrc}
                      alt={title}
                      className="img-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </figure>
                </CardHeader>

                <CardContent>
                  <Badge className="mb-3">{badge}</Badge>

                  <CardTitle className="leading-normal">
                    <a href="#" className="hover:text-primary transition-colors duration-300">
                      {title}
                    </a>
                  </CardTitle>
                </CardContent>

                <CardFooter className="gap-3">
                  <Avatar>
                    <AvatarImage src={avatarSrc} />
                    <AvatarFallback>{authorName}</AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="text-sm mb-0.5">{authorName}</p>

                    <div className="flex items-center gap-1.5">
                      <time
                        dateTime={publishDate}
                        className="text-xs text-muted-foreground"
                      >
                        {publishDate}
                      </time>

                      <span className="w-1 h-1 bg-muted-foreground/50 rounded-full"></span>

                      <p className="text-xs text-muted-foreground">{readingTime}</p>
                    </div>
                  </div>
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