import Brand from "./components/Brand"
import Feature from "./components/feature"
import Header from "./components/Header"
import Hero from "./components/Hero"
import { ReactLenis } from 'lenis/react'
import Process from "./components/Process"



const App = () => {
  return (
    <ReactLenis root>
      <div className="relative isolate overflow-hidden">
        <Header />

        <main>
          <Hero />
          <Brand />
          <Feature />
          <Process />
        </main>
      </div>
    </ReactLenis>
  )
}

export default App