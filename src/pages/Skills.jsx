import { skillCategories } from "../data/skillData"
import Headings from "../components/Headings";

const Skills = () => {
  const info = {
    title:'Expertise',
    intro:'Technical Proficiencies'
  }
  return (
    <main className="min-h-screen bg-dark-100 py-16 px-4 sm:px-6 lg:px-8 page-transition">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <Headings {...info} />
        
        {/* Skills Description */}
        <div className="text-center max-w-3xl mx-auto mt-8 mb-16">
          <p className="text-champagne-400 text-lg leading-relaxed">
            A comprehensive toolkit spanning backend systems, frontend interfaces, databases, 
            and enterprise solutions. Every technology mastered with purpose and precision.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div 
              key={category.category}
              className="skill-category-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-champagne-100">
                    {category.category}
                  </h3>
                  <p className="text-champagne-500 text-sm mt-1">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="divider-gold mb-8"></div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-dark-200/50 border border-gold-400/5 hover:border-gold-400/30 hover:bg-dark-50 transition-all duration-500"
                  >
                    <div className="w-14 h-14 flex items-center justify-center bg-dark-100 rounded-lg group-hover:bg-gold-400/10 transition-all duration-500 ring-1 ring-gold-400/10 group-hover:ring-gold-400/30">
                      <img 
                        className="w-10 h-10 object-contain filter group-hover:brightness-110 transition-all duration-300" 
                        src={skill.image} 
                        alt={skill.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<span class="text-2xl text-gold-400">⚡</span>`;
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-champagne-300 group-hover:text-gold-400 transition-colors duration-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="glass-card inline-block px-12 py-8">
            <p className="text-champagne-400 mb-4">Looking for a skilled engineer?</p>
            <a 
              href="/contact-me" 
              className="inline-flex items-center gap-2 text-gold-400 font-semibold hover:text-gold-300 transition-colors"
            >
              Let's Connect
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Skills