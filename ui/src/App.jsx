import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

// import pages
import { Home, About, Projects, Contact } from './pages'

function App() {

  return (
    <main className='bg-transparent h-full'>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
