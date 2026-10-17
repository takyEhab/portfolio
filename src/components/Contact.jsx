import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Briefcase, ArrowUpRight, Copy, Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/experience';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = async (text, type) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      handle: 'takyEhab',
      href: personalInfo.github,
      icon: Github,
      desc: 'Check out my code repositories and contributions',
    },
    {
      name: 'LinkedIn',
      handle: 'taky-gad',
      href: personalInfo.linkedin,
      icon: Linkedin,
      desc: 'Connect professionally and view my experience',
    },
    ...(personalInfo.upwork
      ? [
          {
            name: 'Upwork',
            handle: 'Taky G.',
            href: personalInfo.upwork,
            icon: Briefcase,
            desc: 'Hire me for freelance full-stack development',
          },
        ]
      : []),
  ];

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-12"
        >
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
            I&apos;m currently open to freelance opportunities, contracts, and full-time software engineering roles.
            Feel free to reach out directly — my inbox is always open.
          </p>

          {/* Primary Contact Action Buttons (Click to Copy) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => handleCopy(personalInfo.email, 'email')}
              aria-label="Copy email address to clipboard"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-accent-600/40 active:translate-y-0"
            >
              {copiedType === 'email' ? (
                <>
                  <Check size={18} className="text-emerald-300" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail size={18} />
                  <span>{personalInfo.email}</span>
                  <Copy size={14} className="opacity-70 transition-opacity group-hover:opacity-100" />
                </>
              )}
            </button>

            {personalInfo.phone && (
              <button
                type="button"
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                aria-label="Copy phone number to clipboard"
                className="group inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-gray-50 active:translate-y-0 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                {copiedType === 'phone' ? (
                  <>
                    <Check size={18} className="text-emerald-500 dark:text-emerald-400" />
                    <span>Phone Copied!</span>
                  </>
                ) : (
                  <>
                    <Phone size={18} className="text-accent-600 dark:text-accent-400" />
                    <span>{personalInfo.phone}</span>
                    <Copy size={14} className="text-gray-400 transition-opacity group-hover:text-gray-600 dark:group-hover:text-gray-200" />
                  </>
                )}
              </button>
            )}
          </div>

          {/* Location Indicator */}
          {personalInfo.location && (
            <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <MapPin size={14} className="text-accent-500" />
              <span>Based in {personalInfo.location} · Open to Remote & Relocation</span>
            </div>
          )}

          {/* Social Profiles Grid */}
          <div className="mt-10 grid gap-4 border-t border-gray-100 pt-8 dark:border-gray-800 sm:grid-cols-2 lg:grid-cols-3">
            {socialLinks.map(({ name, handle, href, icon: Icon, desc }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-start rounded-xl border border-gray-200/80 bg-gray-50/60 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-accent-300 hover:bg-white hover:shadow-md dark:border-gray-800 dark:bg-gray-800/60 dark:hover:border-accent-500 dark:hover:bg-gray-800"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm dark:border dark:border-gray-700/80 dark:bg-gray-900">
                      <Icon size={18} className="text-accent-600 dark:text-accent-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        {name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-600 dark:group-hover:text-accent-400"
                  />
                </div>
                <p className="mt-3 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                  {desc}
                </p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
