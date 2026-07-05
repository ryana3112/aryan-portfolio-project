import { ArrowDown, Download, ExternalLink, Sparkles, Code2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/aryan-real-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="star-field"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Enhanced text content */}
          <div className="space-y-10 animate-fade-in">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/40 backdrop-blur-md border border-border/50 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Open to Software Engineering roles
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-foreground/60 text-2xl sm:text-3xl font-normal mb-2">
                  Hi There! 👋
                </span>
                <span className="block">I'M</span>
                <span className="block gradient-text bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  ARYAN SHARMA
                </span>
              </h1>
              
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90 leading-snug">
                  Aspiring Software Engineer
                </h2>
                <h3 className="text-xl sm:text-2xl text-accent font-medium">
                  Java | Python | SQL | Problem Solver
                </h3>
              </div>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Information Technology graduate with strong foundations in 
                <span className="text-primary font-medium"> Java</span>, 
                <span className="text-accent font-medium"> Python</span>, 
                <span className="text-primary font-medium"> SQL</span>, 
                <span className="text-accent font-medium"> Object-Oriented Programming</span>, 
                <span className="text-primary font-medium"> Data Structures</span>, 
                <span className="text-accent font-medium"> Algorithms</span>, 
                <span className="text-primary font-medium"> DBMS</span>, and 
                <span className="text-accent font-medium"> Computer Networks</span>. 
                Passionate about designing clean, efficient, and scalable software solutions.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('portfolio')} 
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('contact')} 
                className="group border-2 border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-sm font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>

          {/* Right side - Enhanced profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full border border-accent/20 animate-pulse delay-75"></div>
              <div className="absolute inset-8 rounded-full border border-primary/10 animate-pulse delay-150"></div>
              
              {/* Main image container with glassmorphism */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden backdrop-blur-sm bg-gradient-to-br from-card/40 to-card/20 border-2 border-border/30 group-hover:scale-105 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20">
                <img 
                  src={profileImage} 
                  alt="Aryan Sharma - Aspiring Software Engineer" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-300 shadow-lg shadow-primary/30 backdrop-blur-sm border border-primary/20">
                <span className="text-3xl">💻</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-accent via-primary to-accent rounded-2xl flex items-center justify-center -rotate-12 hover:rotate-0 transition-transform duration-300 shadow-lg shadow-accent/30 backdrop-blur-sm border border-accent/20">
                <span className="text-2xl">🚀</span>
              </div>
              
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-primary/80 to-accent/80 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-primary/20 backdrop-blur-sm border border-primary/30">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => scrollToSection('about')} 
            className="group p-4 rounded-full bg-card/20 backdrop-blur-md border border-border/30 hover:bg-card/40 hover:scale-110 transition-all duration-300"
          >
            <ArrowDown className="h-6 w-6 text-primary group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
