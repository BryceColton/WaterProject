import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectList from './ProjectList'
import CategoryFilter from './CategoryFilter'
import WelcomeBand from './WelcomeBand'

function App() {

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])


  return (
    <>
      <div className='container'>
        <div className="row bg-primary text-white">
          <WelcomeBand />
        </div>
        <div className='row'>
          <div className='col-md-3'>
          <CategoryFilter 
          selectedCategories={selectedCategories} 
          setSelectedCategories={setSelectedCategories}/>
          </div>
        <div className='col-md-9'>
          <ProjectList selectedCategories={selectedCategories}/>
          </div> 
        </div>

      </div>
    </>
  )
}

export default App
