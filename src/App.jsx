import React from 'react'
import Navbar from './Components/Navbar'
import HeroPage from './Components/HeroPage'
import ExploreFoods from './Components/ExploreFoods'
import FoodItems from './Components/FoodItems'
import Icons from './Components/Icons'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroPage/>
      <ExploreFoods/>
      <FoodItems/>
      <Icons/>
    </div>
  )
}

export default App
