import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/experience';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: personalInfo.github, icon: Github, label: 'GitHub' },
    { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-8 dark:border-gray-800 dark:bg-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
          &copy; {currentYear} {personalInfo.name}. Built with
          <Heart size={14} className="text-accent-600 dark:text-accent-400" />
        </p>

        <div className="flex gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="text-gray-400 transition-colors hover:text-accent-600 dark:hover:text-accent-400"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
