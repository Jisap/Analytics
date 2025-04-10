import { JSX, useCallback, useState, useRef, MouseEvent } from "react";
import { motion, SpringOptions, useSpring, useMotionValue, frame } from "motion/react";
import * as variants from "@/lib/motionVariants"

type FeatureCardProps = {
  classes?: string;
  children?: JSX.Element;
}


const FeatureCard = ({ classes, children }: FeatureCardProps) => {

  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [showGlow, setShowGlow] = useState(false);

  const x = useMotionValue(0); // Son valores reactivos proporcionados por Framer Motion. 
  const y = useMotionValue(0); // Estos valores se actualizan dinámicamente según la posición del ratón dentro de la tarjeta 

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    
    frame.read(() => {
      // event.client X e Y representan las coordenadas absolutas del raton en el viewport
      // rect representa la posición y dimensiones del contenedor de la tarjeta
      x.set(event.clientX - Number(rect?.left));  // event.clientX - rectLeft Calcula la posición horizontal del ratón relativa al contenedor
      y.set(event.clientY - Number(rect?.top));   // event.clientY - rectTop Calcula la posición vertical del ratón relativa al contenedor.
    })                                            // x.set() y y.set(): Actualizan los valores reactivos x y y con las coordenadas relativas del ratón. 
  }, [x, y]);

  return (
    <motion.div 
      variants={variants.staggerContainer}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className={`relative overflow-hidden p-[1px] ring ring-inset ring-zinc-800/50 rounded-[14px] ${ classes }`}
    >
      <div 
        className="relative isolate bg-card backdrop-blur-md rounded-xl overflow-hidden"
        ref={cardRef}  
        onMouseOver={() => setShowGlow(true)}
        onMouseOut={() => setShowGlow(false)}
        onMouseMove={handleMouseMove}
      >
        {children}
      </div>

      {/* Border effect */}
      <motion.div
        className="absolute -top-[150px] -left-[150px] rounded-full -z-10 w-[300px] h-[300px] bg-foreground blur-[50px]"
        ref={glowRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: Number(showGlow)}}
        style={{ x, y }} // El estilo definido aquí se aplicará en las coordenadas x y y. Framer Motion traduce automáticamente estos valores en transformaciones CSS: transform: translateX(x) translateY(y); 
      >

      </motion.div>
    </motion.div>
  )
}

export default FeatureCard