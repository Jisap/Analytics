import { heroData } from "@/constants"
import { Button } from "./ui/button"
import { heroBanner } from "@/assets"



const Hero = () => {
  return (
    <section>
      <div>
        <div>
          <p>
            {heroData.sectionSubtitle}
          </p>

          <h2>
            {heroData.sectionTitle}
            <span>{heroData.decoTitle}</span>
          </h2>

          <p>
            {heroData.sectionText}
          </p>

          <div>
            <Button>Start Free Trial</Button>
            <Button variant="ghost">Watch Demo</Button>
          </div>
        </div>

        <div>
          <figure>
            <img 
              src={heroBanner} 
              alt="hero-banner" 
              width={1468}
              height={815}  
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero