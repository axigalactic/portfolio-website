export default function Banner() {
    return (
      <header id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <img 
          src="/img-banner.JPEG" 
          alt="Banner background" 
          className="object-cover object-[80%] brightness-50 absolute top-0 left-0 w-full h-full"
        />
        <div className="relative text-white text-left m-4 p-8 z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-3 leading-tight md:leading-[6.5rem] text-shadow">
            Hello there!
          </h1>
          <p className="text-lg md:text-xl text-left text-[#ddd] md:px-5 max-w-3xl">
            Hey, I'm Kia Axibal! I'm diving into full-stack development and I'm excited to learn, 
            grow and connect with others who are just as passionate about coding and building cool, user-friendly projects!
          </p>
          <a 
            href="/kia-axibal-cv.pdf" 
            className="inline-block mt-6 md:mt-8 md:ml-5 px-6 py-3 bg-black text-white font-bold rounded-md shadow-lg hover:bg-gray-800 transition-colors"
            download
          >
            Download my CV
          </a>
        </div>
      </header>
    )
  }
  