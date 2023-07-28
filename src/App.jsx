
import "./App.css"
import Footer from "./components/Footer"

import Hero_1 from "./components/Hero_1"
import Hero_10 from "./components/Hero_10"
import Hero_2 from "./components/Hero_2"
import Hero_3 from "./components/Hero_3"
import Hero_4 from "./components/Hero_4"
import Hero_5 from "./components/Hero_5"
import Hero_6 from "./components/Hero_6"
import Hero_7 from "./components/Hero_7"
import Hero_8 from "./components/Hero_8"
import Hero_9 from "./components/Hero_9"
import { Navbar } from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero_1/>
      <Hero_2/>
      <Hero_3/>
      <Hero_4/>
      <Hero_5/>
      <Hero_6/>
      <Hero_7/>
      <Hero_8/>
      <Hero_9/>
      <Hero_10/>
      
      <Footer/>
      
    </div>
  )
}

export default App
