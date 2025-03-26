export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Gas Up',
      description: 'A full-stack solution for tracking, updating, and analyzing gasoline prices across different gas station branches',
      image: 'public/gasup.png'
    },
    {
      id: 2,
      title: 'Get Queued',
      description: 'A web-based queuing management system to streamline patient check-up process using React.',
      image: 'public/getqueued.png'
    },
    {
      id: 3,
      title: 'Pocket Inspector AI',
      description: 'An AI-powered web app that can detect and identify objects using Google Cloud Vision API.',
      image: 'public/pocketai.png'
    }
  ]

  return (
    <section id="projects" className="py-16 px-4 bg-[#333] text-[#bcbcbc] text-center">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-3xl font-bold mb-8 text-white">Projects</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col">
              <img 
                src={project.image || "/placeholder.svg"} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold mb-2 text-white">{project.title}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}