
import { useState, useRef, useEffect } from "react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("ទាំងអស់");
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
            animatedElements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('show');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filters = ["ទាំងអស់", "វែបសាយ", "កម្មវិធីចល័ត", "AI"];
  
  const projects = [
    {
      id: 1,
      title: "កម្មវិធីគ្រប់គ្រងការងារ",
      description: "កម្មវិធីគ្រប់គ្រងការងារដែលមានមុខងារពេញលេញ ប្រើប្រាស់ React, Redux និង Firebase។",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      category: "វែបសាយ",
      techStack: ["React", "Redux", "Firebase", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "កម្មវិធីចល័តសម្រាប់ការលក់ទំនិញ",
      description: "កម្មវិធីចល័តសម្រាប់ការលក់ទំនិញអនឡាញ ប្រើប្រាស់ React Native និង Node.js។",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      category: "កម្មវិធីចល័ត",
      techStack: ["React Native", "Node.js", "MongoDB", "Express"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "ប្រព័ន្ធចាត់ថ្នាក់រូបភាពដោយប្រើ AI",
      description: "ប្រព័ន្ធចាត់ថ្នាក់រូបភាពដោយប្រើបច្ចេកវិទ្យា Machine Learning និង Computer Vision។",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      category: "AI",
      techStack: ["Python", "TensorFlow", "Flask", "OpenCV"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 4,
      title: "គេហទំព័រព័ត៌មាន",
      description: "គេហទំព័រព័ត៌មានដែលប្រើប្រាស់ Next.js, GraphQL និង Strapi CMS។",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      category: "វែបសាយ",
      techStack: ["Next.js", "GraphQL", "Strapi", "Styled Components"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 5,
      title: "កម្មវិធីនិយាយជាមួយ AI",
      description: "កម្មវិធីសម្រាប់និយាយជាមួយ AI ដែលប្រើប្រាស់បច្ចេកវិទ្យា Natural Language Processing។",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      category: "AI",
      techStack: ["Python", "NLTK", "SpaCy", "Flask"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 6,
      title: "កម្មវិធីតាមដានសុខភាព",
      description: "កម្មវិធីចល័តសម្រាប់តាមដានសុខភាព និងការហាត់ប្រាណ ប្រើប្រាស់ Flutter និង Firebase។",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      category: "កម្មវិធីចល័ត",
      techStack: ["Flutter", "Dart", "Firebase", "Provider"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  const filteredProjects = activeFilter === "ទាំងអស់" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto animate-on-scroll">គម្រោងរបស់ខ្ញុំ</h2>
        
        <div className="flex justify-center flex-wrap gap-4 mt-8 animate-on-scroll">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground font-medium"
                  : "bg-muted hover:bg-muted/80"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card animate-on-scroll overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.demoLink} 
                    className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md transition-colors hover:opacity-90"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    មើលគម្រោង
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="px-4 py-2 border border-border text-sm font-medium rounded-md transition-colors hover:bg-muted"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    មើលកូដ
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <a 
            href="https://github.com/username" 
            className="btn-primary inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            មើលគម្រោងបន្ថែមនៅលើ GitHub
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
