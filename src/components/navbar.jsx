import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 w-full bg-black/50 py-4 transition-all duration-300 shadow-md z-50 ${
      isScrolled ? 'bg-opacity-80' : 'bg-opacity-50'
    }`}>
      <ul className="flex justify-center md:justify-end md:mr-8 space-x-4 md:space-x-8">
        <li>
          <a href="#home" className="text-[#bcbcbc] hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-[#bcbcbc] hover:text-white">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="text-[#bcbcbc] hover:text-white">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="text-[#bcbcbc] hover:text-white">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="text-[#bcbcbc] hover:text-white">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}