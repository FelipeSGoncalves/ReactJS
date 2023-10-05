import './App.css'
import { MainContent } from './components/MainContent'
import { Navbar } from './components/NavBar'

export default function App() {
  return (
    <div className='container'>
      <Navbar />
      <MainContent />
    </div>
  )
}

