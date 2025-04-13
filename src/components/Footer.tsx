import { motion } from "motion/react"
import Logo from "./Logo"
import { footerData } from "@/constants"




const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div>
          <Logo />

          <div>
            {footerData.links.map(({title, items}, index) => (
              <ul key={index}>
                <p>
                  {title}
                </p>

                {items.map(({href, label}, index) => (
                  <li key={index}>
                    <a href={href}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div>
          <a 
            href="https://youtube.com/codewithsadee" 
            target="_blank" 
            className=""
          >
            {footerData.copyright}
          </a>

          <div>
            <ul>
              {footerData.socialLinks.map(({href, icon}, index) => (
                <li key={index}>
                  <a 
                    href={href}
                    target="_blank"  
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer