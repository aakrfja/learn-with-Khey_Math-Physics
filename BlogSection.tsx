
import { useState, useRef, useEffect } from "react";

const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
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

  const blogPosts = [
    {
      id: 1,
      title: "រៀនបង្កើតកម្មវិធីគេហទំព័រដោយប្រើ React និង TypeScript",
      excerpt: "សេចក្តីណែនាំលំអិតក្នុងការរៀនបង្កើតកម្មវិធីគេហទំព័រដោយប្រើប្រាស់ React និង TypeScript សម្រាប់អ្នកចាប់ផ្តើមថ្មី។",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
      date: "ថ្ងៃទី ១៥ ខែមីនា ឆ្នាំ២០២៥",
      tags: ["react", "typescript", "frontend"],
      url: "#"
    },
    {
      id: 2,
      title: "ការប្រើប្រាស់ GraphQL ជាមួយ Node.js និង MongoDB",
      excerpt: "សិក្សាអំពីរបៀបប្រើប្រាស់ GraphQL ជាមួយ Node.js និង MongoDB ដើម្បីបង្កើត API ដែលមានប្រសិទ្ធភាពខ្ពស់។",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80",
      date: "ថ្ងៃទី ០៥ ខែកុម្ភៈ ឆ្នាំ២០២៥",
      tags: ["graphql", "nodejs", "mongodb", "backend"],
      url: "#"
    },
    {
      id: 3,
      title: "៥ គន្លឹះសម្រាប់ការបង្កើតគេហទំព័រដែលមានល្បឿនលឿន",
      excerpt: "តើអ្នកអាចធ្វើឱ្យគេហទំព័ររបស់អ្នកដំណើរការលឿនជាងមុនយ៉ាងដូចម្តេច? សិក្សាអំពីគន្លឹះទាំង ៥ ក្នុងការបង្កើតគេហទំព័រដែលមានល្បឿនលឿន។",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      date: "ថ្ងៃទី ២២ ខែមករា ឆ្នាំ២០២៥",
      tags: ["performance", "web", "optimization"],
      url: "#"
    },
    {
      id: 4,
      title: "មូលដ្ឋានគ្រឹះនៃការប្រើប្រាស់ Docker សម្រាប់អ្នកអភិវឌ្ឍន៍កម្មវិធី",
      excerpt: "សិក្សាអំពីរបៀបប្រើប្រាស់ Docker ដើម្បីធ្វើឱ្យដំណើរការអភិវឌ្ឍន៍កម្មវិធីរបស់អ្នកកាន់តែងាយស្រួល និងមានប្រសិទ្ធភាព។",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      date: "ថ្ងៃទី ០៨ ខែធ្នូ ឆ្នាំ២០២៤",
      tags: ["docker", "devops", "containerization"],
      url: "#"
    },
    {
      id: 5,
      title: "ការបង្កើតកម្មវិធី AI ជាមួយ TensorFlow និង Python",
      excerpt: "សេចក្តីណែនាំលំអិតក្នុងការបង្កើតកម្មវិធី AI ដោយប្រើប្រាស់ TensorFlow និង Python សម្រាប់អ្នកចាប់ផ្តើមថ្មី។",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      date: "ថ្ងៃទី ១៧ ខែវិច្ឆិកា ឆ្នាំ២០២៤",
      tags: ["ai", "tensorflow", "python", "machinelearning"],
      url: "#"
    },
    {
      id: 6,
      title: "ការរចនា UI/UX ដែលល្អសម្រាប់កម្មវិធីវែបសាយ និងកម្មវិធីចល័ត",
      excerpt: "សិក្សាអំពីគោលការណ៍សំខាន់ៗក្នុងការរចនា UI/UX ដែលល្អសម្រាប់កម្មវិធីគេហទំព័រ និងកម្មវិធីចល័ត។",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      date: "ថ្ងៃទី ០៣ ខែតុលា ឆ្នាំ២០២៤",
      tags: ["ui", "ux", "design", "mobile"],
      url: "#"
    }
  ];

  const filteredPosts = searchTerm.trim() === "" 
    ? blogPosts 
    : blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto animate-on-scroll">ប្លុក</h2>
        
        <div className="mt-8 max-w-md mx-auto animate-on-scroll">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg 
                className="w-5 h-5 text-muted-foreground" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="ស្វែងរកអត្ថបទ..." 
              className="contact-input pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <a 
              key={post.id} 
              href={post.url}
              className="blog-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-sm">{post.date}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-muted text-xs font-medium rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  <span className="inline-flex items-center text-primary font-medium hover:underline">
                    អានបន្ថែម
                    <svg 
                      className="w-4 h-4 ml-1" 
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
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12 text-muted-foreground animate-on-scroll">
            មិនមានអត្ថបទដែលត្រូវនឹងការស្វែងរករបស់អ្នកទេ
          </div>
        )}
        
        <div className="text-center mt-12 animate-on-scroll">
          <a 
            href="/blog" 
            className="btn-primary inline-flex items-center"
          >
            មើលអត្ថបទទាំងអស់
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

export default BlogSection;
