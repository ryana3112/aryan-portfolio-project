import { ExternalLink, Github, Calendar, Code2, Database, Award, Terminal, Cpu, Server } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: "JobSync - Job Application Tracker",
      year: "2025",
      description: "A modern, full-featured web application for job seekers to track and manage their job search. Features a clean blue and white UI with glassmorphism, dashboards, statistics, calendar reminders, and interview notes. Built with a Java + JDBC + MySQL backend demonstrating CRUD, authentication, search, filtering, and responsive design.",
      technologies: ["Java", "JDBC", "MySQL", "HTML", "Tailwind CSS", "JavaScript"],
      features: [
        "Authentication (Login, Register, Forgot Password)",
        "Dashboard with Statistics & Charts",
        "Applications CRUD with Search & Filter",
        "Calendar for Follow-ups & Interviews",
        "Interview Preparation Notes",
        "Responsive Glassmorphism UI"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/ryana3112",
      category: "Full Stack Application"
    },
    {
      title: "Employee Management System",
      year: "2025",
      description: "A Java-based employee management application with Admin and Employee dashboards, authentication, task assignments, and data persistence using MySQL and JDBC.",
      technologies: ["Java", "JDBC", "MySQL", "OOP"],
      features: [
        "Admin Dashboard",
        "Employee Dashboard",
        "User Authentication",
        "Task Assignment",
        "Database Integration",
        "Role-based Access"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/ryana3112",
      category: "Software Development"
    }
  ];

  const certifications = [
    {
      title: "Java Programming",
      issuer: "Academic & Projects",
      year: "2024",
      icon: Terminal
    },
    {
      title: "Database Management",
      issuer: "Academic & Projects",
      year: "2024",
      icon: Database
    },
    {
      title: "Object-Oriented Programming",
      issuer: "Academic Coursework",
      year: "2024",
      icon: Cpu
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent projects and technical achievements in software engineering
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="hover-glow bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
              <div className="p-8 space-y-6">
                {/* Project Details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted/50 text-foreground rounded-full text-sm border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications & Learning */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <Card key={index} className="hover-glow bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-foreground">GitHub Activity</h3>
          <p className="text-muted-foreground mb-6">
            Check out my latest code, projects, and contributions
          </p>
          <Button 
            variant="default"
            size="lg"
            className="hover-glow bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground"
            onClick={() => window.open('https://github.com/ryana3112', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            Visit My GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
