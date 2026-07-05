import { GraduationCap, Camera, Code2, Users, Sparkles, Star, Award, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Software Engineering",
      description: "Strong foundation in Java, Python, SQL, OOP, DSA, DBMS, and Computer Networks",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Camera,
      title: "Leadership Experience",
      description: "Served as Photography Head, demonstrating leadership and creative skills",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communication and collaboration skills with proven teamwork experience",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Information Technology graduate with strong computer science fundamentals",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    { icon: Star, label: "Photography Head", value: "Department" },
    { icon: Award, label: "B.Tech IT", value: "2026 Batch" },
    { icon: Target, label: "Projects", value: "5+ Completed" },
    { icon: Sparkles, label: "Experience", value: "Fresher" }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/40 backdrop-blur-md border border-border/50 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            Get to know me better
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover my background, education, and the passion that drives my journey in technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Personal Bio */}
          <div className="space-y-8">
            <div className="relative p-8 bg-card/30 backdrop-blur-md border border-border/30 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl"></div>
              <div className="relative space-y-6">
                <h3 className="text-3xl font-bold text-foreground flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                  My Journey
                </h3>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p className="text-muted-foreground">
                    I am an <strong className="text-foreground font-semibold">Information Technology graduate</strong> focused on software engineering. My interests include Java application development, problem solving, object-oriented design, database systems, and backend development using Java and MySQL.
                  </p>
                  <p className="text-muted-foreground">
                    I enjoy <strong className="text-primary font-semibold">building reliable software</strong>, learning new technologies, and continuously improving my programming skills. With a solid foundation in <strong className="text-primary font-semibold">Java, Python, SQL, OOP, DSA, DBMS, and Computer Networks</strong>, I am eager to contribute to impactful software projects as an SDE fresher.
                  </p>
                  <p className="text-muted-foreground">
                    I believe in writing clean, efficient, and maintainable code. My goal is to grow as a software engineer by working on challenging problems and collaborating with experienced teams.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Education */}
            <div className="relative p-8 bg-card/20 backdrop-blur-md border border-border/20 rounded-3xl">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {[
                  {
                    degree: "B.Tech Information Technology",
                    institution: "Galgotias College of Engineering and Technology",
                    year: "2022-2026",
                    status: "Completed"
                  },
                  {
                    degree: "12th Grade",
                    institution: "St. Joseph's School Mahoba",
                    year: "2022",
                    status: "Completed"
                  },
                  {
                    degree: "10th Grade", 
                    institution: "St. Joseph's School Mahoba",
                    year: "2020",
                    status: "Completed"
                  }
                ].map((edu, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-card/20 rounded-2xl border border-border/20 hover:bg-card/30 transition-colors duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-lg">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-muted-foreground">{edu.year}</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Highlights Grid */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-accent to-primary rounded-full"></div>
              What I Bring
            </h3>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="group relative p-6 bg-card/20 backdrop-blur-md border border-border/30 rounded-2xl hover:bg-card/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-lg font-bold gradient-text">{achievement.value}</div>
                      <div className="text-sm text-muted-foreground">{achievement.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 gap-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <Card key={index} className="group relative overflow-hidden bg-card/20 backdrop-blur-md border border-border/30 hover:bg-card/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-4 bg-gradient-to-br ${highlight.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="space-y-2 flex-1">
                          <h4 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors duration-300">{highlight.title}</h4>
                          <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Enhanced Soft Skills */}
            <div className="relative p-6 bg-card/20 backdrop-blur-md border border-border/20 rounded-3xl">
              <h4 className="text-xl font-semibold text-foreground mb-4">Core Strengths</h4>
              <div className="flex flex-wrap gap-3">
                {['Problem Solving', 'Analytical Thinking', 'Communication', 'Teamwork', 'Leadership', 'Adaptability', 'Clean Coding'].map((skill) => (
                  <span 
                    key={skill} 
                    className="group px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-xl text-sm font-medium border border-primary/20 hover:border-primary/40 hover:bg-primary/20 transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
