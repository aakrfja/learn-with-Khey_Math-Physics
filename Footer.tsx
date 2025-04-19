
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/username" },
    { name: "LinkedIn", url: "https://linkedin.com/in/username" },
    { name: "Twitter", url: "https://twitter.com/username" },
    { name: "Email", url: "mailto:email@example.com" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <a href="#" className="text-3xl font-bold text-foreground flex items-center mb-6">
            <span className="text-primary mr-2">ខ</span>
            <span>ជ</span>
          </a>
          
          <div className="flex gap-8 mb-8">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="text-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <p className="text-muted-foreground text-center mb-8">
            រក្សាសិទ្ធិ © {currentYear} ដោយ សុវណ្ណា។ គ្រប់សិទ្ធិត្រូវបានរក្សា។
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground transform transition-transform hover:scale-110"
            aria-label="ទៅកាន់ខាងលើ"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
