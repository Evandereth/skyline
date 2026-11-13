import Home from "./components/Home"
import Listings from "./components/Listings"
import Navbar from "./components/Navbar"
import Partners from "./components/Partners"


function App() {
  

  return (
    <>  
    <div>
      <Navbar />
      <main>
        <Home />
        <Partners />
        <Listings />
      </main>
    </div>  
    </>
  )
}

export default App
