
import { useEffect, useRef } from "react";

const AboutSection = () => {
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
              }, 200 * index);
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

  const timelineEvents = [
    {
      year: "២០១៨",
      title: "បញ្ចប់ការសិក្សាថ្នាក់បរិញ្ញាបត្រ",
      description: "បញ្ចប់ការសិក្សាថ្នាក់បរិញ្ញាបត្រផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ ជាមួយនឹងពិន្ទុប្រសើរបំផុត។"
    },
    {
      year: "២០១៩",
      title: "ចាប់ផ្តើមការងារជា Front-end Developer",
      description: "ចាប់ផ្តើមអាជីពជា Front-end Developer ដោយប្រើប្រាស់ React និង Vue.js។"
    },
    {
      year: "២០២១",
      title: "ក្លាយជា Full-stack Developer",
      description: "ពង្រីកជំនាញដល់ការអភិវឌ្ឍន៍ Full-stack ដោយប្រើប្រាស់ Node.js និង MongoDB។"
    },
    {
      year: "២០២៣",
      title: "បង្កើតកម្មវិធីផ្ទាល់ខ្លួន",
      description: "បង្កើតកម្មវិធីផ្ទាល់ខ្លួនដែលមានអ្នកប្រើប្រាស់ជាង ១០,០០០ នាក់។"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto animate-on-scroll">អំពីខ្ញុំ</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" 
                alt="អំពីខ្ញុំ" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg animate-on-scroll">
              ជំរាបសួរ! ខ្ញុំឈ្មោះ <span className="font-semibold text-primary">ខេង​ ខី</span>។ ខ្ញុំជាអ្នកអភិវឌ្ឍន៍កម្មវិធីដែលមានបទពិសោធន៍ជាង 
              <span className="font-semibold"> ២៤ ឆ្នាំ</span> លើការបង្កើតកម្មវិធីគេហទំព័រ និងកម្មវិធីចល័ត។
            </p>
            
            <p className="text-lg animate-on-scroll">
              ខ្ញុំមានចំណង់ចំណូលចិត្តក្នុងការប្រើប្រាស់បច្ចេកវិទ្យាទំនើបៗដើម្បីដោះស្រាយបញ្ហាប្រកបដោយភាពច្នៃប្រឌិត និងជួយឱ្យអាជីវកម្មអាចរីកចម្រើនក្នុងពិភពឌីជីថល។
            </p>
            
            <p className="text-lg animate-on-scroll">
              ជំនាញសំខាន់របស់ខ្ញុំរួមមាន React, Node.js, TypeScript, និង Next.js។ ខ្ញុំក៏មានចំណេះដឹងលើ UI/UX design និងការអភិវឌ្ឍន៍កម្មវិធីចល័តផងដែរ។
            </p>
            
            <div className="pt-4 animate-on-scroll">
              <a 
                href="/cv.pdf" 
                className="btn-primary inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                ទាញយក CV
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center animate-on-scroll">ប្រវត្តិនៃការសិក្សា និងការងារ</h3>
          
          <div className="relative">
            {/* Timeline center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center animate-on-scroll ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex w-1/2"></div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                    <span className="text-primary-foreground font-bold">{index + 1}</span>
                  </div>
                  
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                    <div className="bg-card p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                        {event.year}
                      </span>
                      <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
