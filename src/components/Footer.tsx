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
          <a href="" className="">
            {footerData.copyright}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer