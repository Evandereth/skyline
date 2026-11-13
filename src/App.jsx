import Areas from "./components/Area"
import SellBanner from "./components/Banner"
import Features from "./components/Features"
import Home from "./components/Home"
import Listings from "./components/Listings"
import MortgageCalculator from "./components/Mortgage"
import Navbar from "./components/Navbar"
import Partners from "./components/Partners"
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
      </main>
    </div>  
    </>
  )
}

export default App
