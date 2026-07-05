import { 
  Globe, 
  Code2, 
  Database, 
  Terminal,
  Zap,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Rocket,
  Target
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Building reliable software applications using Java and Python with clean code, strong logic, and efficient problem-solving approaches.",
      features: [
        "Java Application Development",
        "Python Scripting",
        "Object-Oriented Design",
        "Clean & Maintainable Code"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Database & Backend Development",
      description: "Designing and managing relational databases with MySQL and implementing backend logic using Java, JDBC, and SQL.",
      features: [
        "MySQL Database Design",
        "SQL Query Optimization",
        "JDBC Connectivity",
        "Data Management"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Developing responsive and user-friendly web applications using HTML5, CSS3, and JavaScript with clean UI/UX design.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "HTML5 & CSS3",
        "Cross-browser Compatibility"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Terminal,
      title: "Programming & Problem Solving",
      description: "Using Java and Data Structures & Algorithms to solve logical and coding problems efficiently.",
      features: [
        "Java Programming",
        "Data Structures",
        "Algorithm Design",
        "Problem Solving"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/10"></div>
      <div className="absolute top-32 left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/40 backdrop-blur-md border border-border/50 rounded-full text-sm font-medium mb-6">
            <Rocket className="w-4 h-4 text-primary" />
            What I Offer
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Software engineering services tailored to build reliable and efficient solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group relative overflow-hidden bg-card/20 backdrop-blur-md border border-border/30 hover:bg-card/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 bg-gradient-to-br ${service.color} rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8 relative">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-bold text-foreground text-lg flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3 p-3 bg-card/20 rounded-xl border border-border/20 hover:bg-card/30 transition-colors duration-300">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Service Process */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold mb-12 text-foreground flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-primary" />
            My Development Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your requirements and goals", icon: Target },
              { step: "02", title: "Planning", desc: "Creating detailed project roadmap and timeline", icon: Code2 },
              { step: "03", title: "Development", desc: "Building your solution with best practices", icon: Globe },
              { step: "04", title: "Delivery", desc: "Testing, optimization, and final deployment", icon: Rocket }
            ].map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <div key={index} className="group relative">
                  <div className="relative p-8 bg-card/20 backdrop-blur-md border border-border/30 rounded-3xl hover:bg-card/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                    <div className="text-center space-y-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {phase.step}
                        </div>
                      </div>
                      <h4 className="font-bold text-foreground text-xl group-hover:text-primary transition-colors duration-300">{phase.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{phase.desc}</p>
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-primary absolute -right-2 -top-2" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative overflow-hidden bg-card/20 backdrop-blur-md border border-border/30 rounded-3xl p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5"></div>
          <div className="relative text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-foreground">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Let's discuss how I can help build reliable software solutions with clean, efficient code.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Today
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
