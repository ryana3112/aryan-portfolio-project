import { Heart, ArrowUp, Github, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const quickLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'Portfolio',
    href: '#portfolio'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Aryan Sharma</h3>
            <p className="text-muted-foreground max-w-xs">Aspiring Software Engineer passionate about building reliable and efficient software solutions with Java, Python, SQL, and clean code.</p>
            <div className="flex space-x-3">
              <a href="https://github.com/ryana3112" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors" title="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:aryan.theceo@gmail.com" className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors" title="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+916393218238" className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors" title="Phone">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => <button key={index} onClick={() => scrollToSection(link.href)} className="text-muted-foreground hover:text-primary transition-colors text-left">
                  {link.name}
                </button>)}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>aryan.theceo@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 6393218238</span>
              </p>
              <p className="text-sm">
                Open to full-time software engineering roles
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            title="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>;
};

export default Footer;
