import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] text-[#333]">
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App