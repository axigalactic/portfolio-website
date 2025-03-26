export default function Footer() {
    return (
      <footer className="bg-[#333] text-[#bcbcbc] py-4 px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Kia Axibal. All Rights Reserved. 
          Icons from <a href="https://www.flaticon.com" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">Flaticons</a>.
        </p>
      </footer>
    )
  }