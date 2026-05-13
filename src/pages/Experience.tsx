import { Briefcase, Calendar, MapPin, User, CheckCircle } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  coordinator?: string;
  description: string;
  highlights: string[];
  tech: string[];
  current: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: 'SuprMentr Technologies Pvt Ltd',
    role: 'Full-Stack Web Development Intern',
    period: 'Feb 2026 – May 2026',
    location: 'Bangalore, India',
    coordinator: 'Mr. Yashas M H',
    description:
      'Working as a Full-Stack Web Development Intern, contributing to the development of web-based learning and mentorship platforms using modern technologies.',
    highlights: [
      'Developed and maintained full-stack features for the SuprMentr learning platform',
      'Collaborated with senior engineers under the coordination of Mr. Yashas M H',
      'Implemented RESTful APIs and integrated front-end components with React',
      'Participated in code reviews and Agile sprint planning',
    ],
    tech: ['React', 'Node.js', 'REST APIs', 'JavaScript', 'MongoDB'],
    current: true,
  },
  {
    company: 'Tap Academy',
    role: 'Full Stack Developer Intern',
    period: 'Sep 2025 – Jan 2026',
    location: 'Bangalore, India',
    description:
      'Completed a comprehensive full-stack development internship focused on enterprise-grade Java technologies and modern front-end frameworks.',
    highlights: [
      'Built full-stack web applications using Java, Spring Boot, and React',
      'Designed and implemented RESTful APIs for various business modules',
      'Worked with relational databases using Hibernate and MySQL',
      'Gained hands-on experience in MVC architecture and component-based UI design',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'Hibernate', 'MySQL'],
    current: false,
  },
];

export default function Experience() {
  return (
    <div className="page">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-40 w-80 h-80 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4 text-xs text-blue-400 font-medium">
            <Briefcase size={12} />
            Professional Journey
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Experience</h1>
          <p className="text-slate-400 max-w-xl">
            Two internships building real-world full-stack applications, working alongside
            industry professionals in fast-paced environments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative flex gap-8 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center z-10 ${
                      exp.current
                        ? 'bg-gradient-to-br from-blue-500 to-teal-500 animate-pulse-glow'
                        : 'glass border border-white/10'
                    }`}
                  >
                    <Briefcase size={18} className={exp.current ? 'text-white' : 'text-slate-400'} />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 glass glass-hover rounded-2xl p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full text-xs bg-teal-400/10 text-teal-400 border border-teal-400/20 font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-right sm:text-right">
                      <div className="flex items-center justify-end gap-1.5 text-slate-400 text-sm">
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center justify-end gap-1.5 text-slate-500 text-xs">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {exp.coordinator && (
                    <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-white/3 border border-white/5">
                      <User size={13} className="text-slate-500" />
                      <span className="text-slate-400 text-sm">
                        Coordinator: <span className="text-slate-300 font-medium">{exp.coordinator}</span>
                      </span>
                    </div>
                  )}

                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle size={14} className="text-teal-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16 animate-fade-in-up delay-300">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
              <span className="text-white text-sm font-bold">E</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>
          <div className="glass glass-hover rounded-2xl p-7">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Bachelor of Engineering — Computer Science
                </h3>
                <p className="text-blue-400 font-medium">VTU Affiliated College</p>
                <p className="text-slate-400 text-sm mt-1">2021 – 2025</p>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-4xl font-bold gradient-text">9.3</div>
                <div className="text-slate-400 text-sm">CGPA</div>
              </div>
            </div>
            <div className="mt-5 w-full bg-white/5 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 transition-all"
                style={{ width: '93%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
