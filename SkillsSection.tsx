
import { useRef, useEffect } from "react";

const SkillsSection = () => {
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

  const skillCategories = [
    {
      title: "បច្ចេកវិទ្យាខាងមុខ (Frontend)",
      skills: [
        { name: "ភាសា HTML", level: 95, icon: "🌐" },
        { name: "ភាសា CSS", level: 90, icon: "🎨" },
        { name: "ភាសា JavaScript", level: 92, icon: "⚡" },
        { name: "React.js", level: 88, icon: "⚛️" },
        { name: "Vue.js", level: 80, icon: "🔧" },
        { name: "TypeScript", level: 85, icon: "📘" },
      ]
    },
    {
      title: "បច្ចេកវិទ្យាខាងក្រោយ (Backend)",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 82, icon: "🚂" },
        { name: "ភាសា Python", level: 75, icon: "🐍" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "PostgreSQL", level: 78, icon: "🐘" },
        { name: "GraphQL", level: 70, icon: "📊" },
      ]
    },
    {
      title: "ឧបករណ៍ និងបច្ចេកវិទ្យាផ្សេងៗ",
      skills: [
        { name: "Git & GitHub", level: 90, icon: "📝" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "UI/UX Design", level: 80, icon: "🎭" },
        { name: "Responsive Design", level: 92, icon: "📱" },
        { name: "Testing (Jest)", level: 75, icon: "🧪" },
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto animate-on-scroll">ជំនាញរបស់ខ្ញុំ</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="skills-card animate-on-scroll"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <span className="mr-2 text-xl">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-primary">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: "0%" }}
                        ref={(el) => {
                          if (el) {
                            setTimeout(() => {
                              el.style.width = `${skill.level}%`;
                            }, 300 + skillIndex * 100);
                          }
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "គម្រោងបានបញ្ចប់", count: "១០+", icon: "🚀" },
            { label: "អតិថិជនពេញចិត្ត", count: "២៥+", icon: "😊" },
            { label: "ឆ្នាំនៃបទពិសោធន៍", count: "៥+", icon: "⏳" },
            { label: "បច្ចេកវិទ្យាប្រើប្រាស់", count: "២០+", icon: "🔧" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="stat-card animate-on-scroll"
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.count}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
