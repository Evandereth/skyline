import Agents from "./components/Agents"
import Areas from "./components/Area"
import SellBanner from "./components/Banner"
import Contact from "./components/Contact"
import FAQ from "./components/faq"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Listings from "./components/Listings"
import MortgageCalculator from "./components/Mortgage"
import Navbar from "./components/Navbar"
import Partners from "./components/Partners"
import Testimonials from "./components/Testimonials"
import HowItWorks from "./components/Work"


function App() {
  

  return (
    <>  
    <div>
      <Navbar />
      <main>
        <Home />
        <Partners />
        <Listings />
        <Areas />
        <HowItWorks />
        <Features />
        <MortgageCalculator />
        <SellBanner />
        <Agents />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>  
    </>
  )
}

export default App
