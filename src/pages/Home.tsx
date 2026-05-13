import { Github, Linkedin, Mail, Star, Code, Award, Zap, ArrowRight, BookOpen, Coffee, Terminal, Sparkles, Cpu, Database, GitBranch, Rocket, Download } from 'lucide-react';

type Page = 'home' | 'experience' | 'projects' | 'contact';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
}

const skills = [
  'Java', 'Spring Boot', 'React', 'Node.js', 'REST APIs',
  'MySQL', 'MongoDB', 'Hibernate', 'JavaScript', 'TypeScript',
  'Git', 'MVC Architecture',
];

const techStack = [
  { icon: Code, label: 'Frontend', color: 'from-blue-500 to-blue-600' },
  { icon: Database, label: 'Database', color: 'from-teal-500 to-teal-600' },
  { icon: Cpu, label: 'Backend', color: 'from-purple-500 to-purple-600' },
  { icon: GitBranch, label: 'Version Control', color: 'from-orange-500 to-orange-600' },
];

const achievements = [
  { value: '1300+', label: 'Coding Problems', icon: Code, color: 'text-blue-400' },
  { value: '9.3', label: 'CGPA', icon: Award, color: 'text-teal-400' },
  { value: '2+', label: 'Internships', icon: Zap, color: 'text-amber-400' },
  { value: '3+', label: 'Projects Built', icon: Star, color: 'text-rose-400' },
];

export default function Home({ setCurrentPage }: HomeProps) {
  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/SarikaNJavaDev.pdf';
    link.download = 'Sarika_N_Resume.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="page relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 -right-40 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl animate-blob" />
        <div className="absolute top-3/4 left-1/3 w-72 h-72 rounded-full bg-blue-400/5 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-purple-500/8 blur-3xl animate-float" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-20">
          <div className="flex-1 animate-fade-in-up z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 text-xs text-teal-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Available for opportunities
            </div>

            <div className="mb-8">
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
                Sarika <span className="gradient-text">N</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 flex items-center gap-3">
                <Rocket size={28} className="text-blue-400 animate-float" />
                <span className="gradient-text">Full-Stack Engineer</span>
              </h2>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
              BE Computer Science graduate passionate about building scalable web applications
              with Java, Spring Boot, and React. Currently interning at SuprMentr Technologies,
              solving complex problems and crafting elegant digital solutions.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => navigate('projects')}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate('contact')}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass text-slate-300 font-semibold hover:text-white transition-all hover:scale-105 hover:bg-white/10 border border-white/10"
              >
                Get In Touch
              </button>
              <button
                onClick={downloadResume}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass text-slate-300 font-semibold hover:text-white transition-all hover:scale-105 hover:bg-white/10 border border-white/10"
              >
                <Download size={16} />
                Download Resume
              </button>
            </div>

            <div className="flex items-center gap-5 pt-8 border-t border-white/10">
              <span className="text-sm text-slate-500">Connect with me:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Sarika774048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-blue-300 hover:border-blue-400/30 transition-all hover:bg-blue-500/10 border border-white/10"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/sarika-n-0323552ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-blue-300 hover:border-blue-400/30 transition-all hover:bg-blue-500/10 border border-white/10"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:sarikanmks9880@gmail.com"
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-blue-300 hover:border-blue-400/30 transition-all hover:bg-blue-500/10 border border-white/10"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* 3D Hero Image */}
          <div className="lg:w-96 animate-fade-in delay-200 perspective">
            <div className="relative h-96">
              <div className="absolute inset-0 rounded-3xl overflow-hidden card-3d">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-teal-500/5 to-transparent" />
                <img
                  src="/SarikaN.jpeg"
                  alt="Sarika N - Full-Stack Engineer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating stats badges */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-2xl glass p-4 flex flex-col items-center justify-center text-center animate-float glow">
                <span className="text-4xl font-bold gradient-text">9.3</span>
                <span className="text-xs text-slate-400 mt-1">CGPA</span>
                <span className="text-xs text-slate-500 mt-1">BE CSE</span>
              </div>

              <div className="absolute -top-6 -left-6 w-28 h-28 rounded-2xl glass p-3 flex flex-col items-center justify-center text-center animate-float-slow" style={{ animationDelay: '0.5s' }}>
                <Sparkles size={20} className="text-blue-400 mb-1" />
                <span className="text-sm font-bold text-blue-400">Active</span>
                <span className="text-xs text-slate-400">Learner</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 animate-fade-in-up delay-300">
          {achievements.map((stat, i) => (
            <div
              key={i}
              className="stats-card rounded-2xl p-6 flex flex-col items-center text-center perspective"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color.replace('text-', 'from-').split('-')[0] === 'from' ? stat.color : 'from-blue-500 to-blue-600'} flex items-center justify-center mb-3 glow`}>
                <stat.icon size={24} className="text-white" />
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="mb-20 animate-fade-in-up delay-300">
          <div className="flex items-center gap-3 mb-10">
            <Terminal size={24} className="text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Tech Stack</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className={`glass glass-hover rounded-2xl p-6 flex flex-col items-center text-center bg-gradient-to-br ${tech.color} opacity-10 hover:opacity-20 transition-all`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4 glow`}>
                  <tech.icon size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-white">{tech.label}</h3>
                <p className="text-xs text-slate-400 mt-2">Modern & Scalable</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section with Animation */}
        <div className="mb-20 animate-fade-in-up delay-400">
          <div className="flex items-center gap-3 mb-8">
            <Code size={24} className="text-teal-400" />
            <h2 className="text-3xl font-bold text-white">Expertise</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <div
                key={skill}
                className="skill-badge px-4 py-2.5 rounded-full text-sm font-medium text-slate-300 transition-all hover:text-blue-300 hover:border-blue-400 hover:scale-110"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Bento Grid Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in-up delay-500">
          <div className="glass glass-hover rounded-2xl p-7 md:col-span-2 perspective">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0 glow">
                <BookOpen size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-2">Education</h3>
                <p className="text-slate-300 font-medium">BE in Computer Science</p>
                <p className="text-slate-400 text-sm mt-1">CGPA: 9.3 — 2021–2025</p>
                <div className="mt-4 w-full bg-white/5 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 animate-pulse" style={{ width: '93%' }} />
                </div>
                <p className="text-xs text-slate-500 mt-2">Academic Excellence: 93%</p>
              </div>
            </div>
          </div>

          <div className="glass glass-hover rounded-2xl p-7 perspective">
            <div className="flex flex-col items-start">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-4 glow">
                <Coffee size={18} className="text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Currently</h3>
              <p className="text-slate-300 text-sm font-medium">Full-Stack Intern</p>
              <p className="text-blue-400 text-sm font-medium mt-1">SuprMentr</p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-teal-400">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                Status: Active
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 glass rounded-3xl p-10 text-center animate-fade-in-up delay-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-teal-500/5" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-3">Ready to build something amazing?</h3>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project. Whether you have an opportunity, project, or just want to chat about tech.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('contact')}
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                <Mail size={18} />
                Start a Conversation
              </button>
              <button
                onClick={downloadResume}
                className="flex items-center gap-2 px-8 py-4 rounded-xl glass text-white font-semibold hover:bg-white/10 transition-all hover:scale-105 border border-white/20"
              >
                <Download size={18} />
                Get My Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}