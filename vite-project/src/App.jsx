

import Topbar from './componets/topbar/Topbar'
import './App.css'
import './SCSS/global.scss'
import Styleguide from './views/styleguide/Styleguide'
import { Link, Route, Routes } from 'react-router-dom'
import Contact from './views/Contact'




function App() {


  return (
    <>

      
      <header className='section'>
        <h1> Project Gamma</h1>
          <Link to="/contact">Contacto</Link>
          <Link to="/styleguide">StyleGuide</Link>
          <Link to="/">Home</Link>
      </header>
      <main>
      <Topbar/>
      <Contact/>
          <Routes>

            <Route path="/styleguide" element={ <Styleguide/>} />
            

          </Routes>
      </main>


    </>
  )
}

export default App
