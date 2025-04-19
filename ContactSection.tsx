
import { useState, useRef, useEffect } from "react";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "បានផ្ញើសារដោយជោគជ័យ",
        description: "យើងខ្ញុំនឹងឆ្លើយតបទៅកាន់អ្នកក្នុងពេលឆាប់ៗ។ សូមអរគុណ!",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: "https://github.com/username", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com/in/username", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com/username", label: "Twitter" },
    { icon: <Mail className="w-5 h-5" />, url: "mailto:email@example.com", label: "Email" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto animate-on-scroll">ទំនាក់ទំនង</h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4">ផ្ញើសារមកខ្ញុំ</h3>
            <p className="text-muted-foreground mb-6">
              មានសំណួរ ឬចង់ធ្វើការជាមួយខ្ញុំ? សូមបំពេញព័ត៌មាននៅក្នុងទម្រង់នេះ ហើយខ្ញុំនឹងឆ្លើយតបទៅកាន់អ្នកក្នុងរយៈពេល ២៤ ម៉ោង។
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">ឈ្មោះ</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="contact-input" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">អ៊ីមែល</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="contact-input" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">ប្រធានបទ</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="contact-input" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">សារ</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  className="contact-input" 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    កំពុងផ្ញើ...
                  </>
                ) : (
                  "ផ្ញើសារ"
                )}
              </button>
            </form>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4">ព័ត៌មានទំនាក់ទំនង</h3>
            <p className="text-muted-foreground mb-6">
              អ្នកក៏អាចទំនាក់ទំនងមកខ្ញុំតាមរយៈព័ត៌មានខាងក្រោមនេះផងដែរ។
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="mr-4 mt-1 bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-lg font-medium">អ៊ីមែល</h4>
                  <p className="text-muted-foreground">contact@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="mr-4 mt-1 bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-lg font-medium">ទីតាំង</h4>
                  <p className="text-muted-foreground">ភ្នំពេញ, កម្ពុជា</p>
                </div>
              </div>
              
              <div className="pt-6">
                <h4 className="text-lg font-medium mb-4">បណ្តាញសង្គម</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.url}
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="pt-8">
                <div className="rounded-xl overflow-hidden h-64 shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250436.59940289347!2d104.73650255934455!3d11.55284875509782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1649935804180!5m2!1sen!2skh" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
