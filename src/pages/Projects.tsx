import { ExternalLink, Github, ShoppingCart, BookOpen, Utensils, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  icon: React.ElementType;
  iconColor: string;
  features: string[];
  github?: string;
  live?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Application',
    description: 'Full-stack online shopping platform with complete cart and order management.',
    longDescription:
      'A comprehensive e-commerce solution built with Java Spring Boot backend and React frontend. Features include product catalog, shopping cart, user authentication, and order tracking with REST API integration.',
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs', 'Hibernate'],
    icon: ShoppingCart,
    iconColor: 'text-blue-400',
    features: [
      'Product catalog with filtering and search',
      'Secure user authentication & sessions',
      'Shopping cart & checkout flow',
      'Order management dashboard',
      'RESTful API with Spring Boot',
    ],
    github: 'https://github.com/Sarika774048',
    image: 'https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'E-Learning Platform',
    description: 'Interactive online learning management system with course and student tracking.',
    longDescription:
      'A robust e-learning platform that enables instructors to create and manage courses while students can enroll, track progress, and access educational content. Built with Hibernate ORM and MySQL for reliable data persistence.',
    tech: ['Java', 'Hibernate', 'MySQL', 'JSP', 'Servlets', 'MVC'],
    icon: BookOpen,
    iconColor: 'text-teal-400',
    features: [
      'Course creation and management',
      'Student enrollment and progress tracking',
      'Hibernate ORM for database operations',
      'MVC architecture pattern',
      'Quiz and assessment modules',
    ],
    github: 'https://github.com/Sarika774048',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Food Delivery App',
    description: 'Real-time food ordering and delivery tracking application.',
    longDescription:
      'A feature-rich food delivery application implementing a clean MVC architecture with RESTful APIs. Supports restaurant browsing, menu management, order placement, and real-time delivery status updates.',
    tech: ['Java', 'Spring Boot', 'REST APIs', 'React', 'MySQL', 'MVC'],
    icon: Utensils,
    iconColor: 'text-amber-400',
    features: [
      'Restaurant listing and menu browsing',
      'Cart management and order placement',
      'Real-time order status tracking',
      'RESTful API with MVC architecture',
      'Admin panel for restaurant management',
    ],
    github: 'https://github.com/Sarika774048',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Projects() {
  return (
    <div className="page">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 rounded-full bg-teal-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4 text-xs text-teal-400 font-medium">
            <Github size={12} />
            Open Source Work
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Projects</h1>
          <p className="text-slate-400 max-w-xl">
            A selection of full-stack projects demonstrating proficiency in Java, Spring Boot,
            React, and database technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="glass glass-hover rounded-2xl overflow-hidden flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                    <project.icon size={18} className={project.iconColor} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.longDescription}</p>

                <ul className="space-y-1.5 mb-5">
                  {project.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      <Github size={15} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm transition-colors ml-auto"
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {!project.live && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm transition-colors ml-auto"
                    >
                      View on GitHub <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 glass rounded-2xl p-8 text-center animate-fade-in-up delay-400">
          <h3 className="text-xl font-bold text-white mb-2">More on GitHub</h3>
          <p className="text-slate-400 text-sm mb-5">
            Explore all my repositories, contributions, and open-source work.
          </p>
          <a
            href="https://github.com/Sarika774048"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium hover:opacity-90 transition-all hover:scale-105"
          >
            <Github size={18} />
            github.com/Sarika774048
          </a>
        </div>
      </div>
    </div>
  );
}
