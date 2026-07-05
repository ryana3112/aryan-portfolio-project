import { Code2, Database, Globe, Cpu, GitBranch, Wrench, Palette, Brain, Sparkles, TrendingUp, Zap, Terminal, Server, Coffee, AppWindow } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Java", level: 90, color: "from-red-400 to-orange-500" },
        { name: "Python", level: 75, color: "from-blue-400 to-yellow-400" },
        { name: "JavaScript", level: 80, color: "from-yellow-400 to-orange-500" },
        { name: "SQL", level: 85, color: "from-blue-400 to-cyan-500" },
        { name: "C", level: 65, color: "from-blue-500 to-indigo-500" }
      ]
    },
    {
      title: "Core Computer Science",
      icon: Cpu,
      skills: [
        { name: "Object-Oriented Programming (OOP)", level: 90, color: "from-purple-400 to-pink-500" },
        { name: "Data Structures & Algorithms", level: 85, color: "from-indigo-400 to-purple-500" },
        { name: "DBMS", level: 80, color: "from-green-400 to-emerald-500" },
        { name: "Computer Networks", level: 70, color: "from-cyan-400 to-blue-500" },
        { name: "Operating Systems", level: 70, color: "from-orange-400 to-red-500" }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "HTML5", level: 90, color: "from-orange-400 to-red-500" },
        { name: "CSS3", level: 80, color: "from-blue-400 to-cyan-500" },
        { name: "JavaScript", level: 80, color: "from-yellow-400 to-orange-500" },
        { name: "REST APIs", level: 70, color: "from-green-400 to-teal-500" },
        { name: "Responsive Design", level: 75, color: "from-pink-400 to-purple-500" }
      ]
    },
    {
      title: "Backend & Tools",
      icon: Server,
      skills: [
        { name: "Java", level: 90, color: "from-red-400 to-orange-500" },
        { name: "JDBC", level: 75, color: "from-blue-400 to-cyan-500" },
        { name: "MySQL", level: 85, color: "from-blue-500 to-indigo-500" },
        { name: "Git & GitHub", level: 80, color: "from-gray-400 to-orange-500" },
        { name: "VS Code", level: 85, color: "from-blue-400 to-cyan-500" },
        { name: "IntelliJ IDEA", level: 80, color: "from-purple-400 to-pink-500" }
      ]
    }
  ];

  const technicalSkills = [
    "Java", "Python", "JavaScript", "SQL", "C",
    "OOP", "DSA", "DBMS", "Computer Networks",
    "HTML5", "CSS3", "REST APIs", "Responsive Design",
    "JDBC", "MySQL", "Git", "GitHub", "VS Code", "IntelliJ IDEA"
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      <div className="absolute top-40 left-40 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/40 backdrop-blur-md border border-border/50 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            Technical Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Skills & <span className="gradient-text bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency across software engineering domains
          </p>
        </div>

        {/* Enhanced Skill Categories with Progress Bars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group relative overflow-hidden bg-card/20 backdrop-blur-md border border-border/30 hover:bg-card/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                    <span className="text-xl font-bold">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 relative">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-foreground text-lg">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-primary">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="h-3 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Technical Skills Tags */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold mb-12 text-foreground flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-primary" />
            Technical Arsenal
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technicalSkills.map((skill, index) => (
              <span
                key={index}
                className="group px-6 py-3 bg-card/20 backdrop-blur-md border border-border/30 text-foreground rounded-2xl text-sm font-medium hover:bg-card/40 hover:border-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/10 cursor-default"
              >
                <span className="relative">
                  {skill}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Enhanced Experience Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            icon: Terminal,
            title: "Software Development",
            description: "Building reliable applications using Java, Python, and SQL with focus on clean code",
            gradient: "from-blue-500 to-cyan-500"
          }, {
            icon: Database,
            title: "Database & Backend",
            description: "Designing and managing databases with MySQL, JDBC, and SQL for efficient data operations",
            gradient: "from-green-500 to-emerald-500"
          }, {
            icon: Wrench,
            title: "Development Tools",
            description: "Proficient with Git, GitHub, VS Code, and IntelliJ IDEA for efficient development workflows",
            gradient: "from-purple-500 to-pink-500"
          }].map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="group text-center space-y-6 p-8 bg-card/20 backdrop-blur-md border border-border/30 rounded-3xl hover:bg-card/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                <div className={`p-6 bg-gradient-to-br ${highlight.gradient} rounded-2xl w-20 h-20 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{highlight.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
