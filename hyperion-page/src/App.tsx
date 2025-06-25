import './App.css'
import Hero from './Components/Hero'
import AboutUs from './Components/AboutUs'
import Founders from './Components/Founders'
import Weapons from './Components/Weapons'
import Opportunity from './Components/Opportunity'
import Final from './Components/Finla'

function App() {

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Quicksand&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital@0;1&display=swap');
      </style>
      <Hero />
      <AboutUs/>
      <Founders/>
      <Weapons/>
      <Opportunity/>
      <Final/>
    </>
  )
}

export default App
