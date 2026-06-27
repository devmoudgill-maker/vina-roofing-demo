import { LazyMotion, domAnimation, m, useScroll, useSpring } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import WhyChoose from './components/WhyChoose'
import Services from './components/Services'
import Process from './components/Process'
import Numbers from './components/Numbers'
import Testimonials from './components/Testimonials'
import ServiceArea from './components/ServiceArea'
import CTA from './components/CTA'
import Footer from './components/Footer'
import MobileBar from './components/MobileBar'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-orange"
      />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <WhyChoose />
        <Services />
        <Process />
        <Numbers />
        <Testimonials />
        <ServiceArea />
        <CTA />
      </main>
      <Footer />
      <MobileBar />
    </LazyMotion>
  )
}
