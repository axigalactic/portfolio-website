export default function Skills() {
    const skills = [
      { name: 'HTML', icon: '/html.png' },
      { name: 'CSS', icon: '/css.png' },
      { name: 'JavaScript', icon: '/js.png' },
      { name: 'ReactJS', icon: '/reactjs.png' },
      { name: 'NodeJS', icon: '/nodejs.png' },
      { name: 'MongoDB', icon: '/mongodb.svg' },
      { name: 'Python', icon: '/python.png' },
    ]
  
    return (
      <section id="skills" className="py-16 px-4 bg-white text-center min-h-[50vh] flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-3xl font-bold mb-8">I'm skilled at</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full"
              >
                <div className="w-5 h-5 mr-2 relative">
                  <img 
                    src={skill.icon || "/placeholder.svg"} 
                    alt={skill.name} 
                    className="w-full h-full"
                  />
                </div>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }