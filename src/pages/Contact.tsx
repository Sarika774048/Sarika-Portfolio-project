import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }
    if (!form.email.trim() || !validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim() || form.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sarikanmks9880@gmail.com',
      href: 'mailto:sarikanmks9880@gmail.com',
      color: 'text-blue-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'sarika-n-0323552ba',
      href: 'https://linkedin.com/in/sarika-n-0323552ba',
      color: 'text-sky-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Sarika774048',
      href: 'https://github.com/Sarika774048',
      color: 'text-slate-300',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: null,
      color: 'text-teal-400',
    },
  ];

  return (
    <div className="page">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-teal-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4 text-xs text-blue-400 font-medium">
            <Mail size={12} />
            Get In Touch
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact</h1>
          <p className="text-slate-400 max-w-xl">
            Open to full-time opportunities, internships, and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4 animate-fade-in-up delay-100">
            {contactLinks.map((link, i) => (
              <div
                key={i}
                className="glass glass-hover rounded-xl p-4 flex items-center gap-4"
              >
                <div className={`w-10 h-10 rounded-lg glass flex items-center justify-center shrink-0`}>
                  <link.icon size={18} className={link.color} />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-500 text-xs mb-0.5">{link.label}</p>
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`${link.color} text-sm font-medium hover:opacity-80 transition-opacity truncate block`}
                    >
                      {link.value}
                    </a>
                  ) : (
                    <p className="text-slate-300 text-sm font-medium">{link.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="glass rounded-xl p-5 mt-6">
              <p className="text-slate-300 text-sm font-medium mb-2">Availability</p>
              <div className="flex items-center gap-2 text-teal-400 text-sm">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                Open to opportunities
              </div>
              <p className="text-slate-500 text-xs mt-2">
                Typically responds within 24 hours
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-fade-in-up delay-200">
            <div className="glass rounded-2xl p-7">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-400/10 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm max-w-xs">
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="mt-6 px-5 py-2.5 rounded-lg glass text-slate-300 text-sm hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-1.5">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Sarika N"
                        className="w-full rounded-xl px-4 py-3 text-sm"
                      />
                      {errors.name && (
                        <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-1.5">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-xl px-4 py-3 text-sm"
                      />
                      {errors.email && (
                        <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Internship opportunity at..."
                      className="w-full rounded-xl px-4 py-3 text-sm"
                    />
                    {errors.subject && (
                      <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.subject}
                      </p>
                    )}
                  </div>
                  <div className="mb-6">
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about the opportunity or project..."
                      className="w-full rounded-xl px-4 py-3 text-sm resize-none"
                    />
                    {errors.message && (
                      <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01]"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
