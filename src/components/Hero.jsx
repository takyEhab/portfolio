import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { personalInfo } from '../data/experience';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 sm:px-6 lg:px-8"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-white to-violet-50 dark:from-gray-950 dark:via-gray-900 dark:to-accent-950/30" />
        <div
          className="absolute -left-1/4 top-1/4 h-96 w-96 animate-float rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-600/10"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute -right-1/4 bottom-1/4 h-80 w-80 animate-float rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-600/10"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-600 dark:text-accent-400"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 font-heading text-xl font-medium text-accent-600 dark:text-accent-400 sm:text-2xl"
        >
          {personalInfo.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-700 hover:shadow-accent-600/40"
          >
            View Projects
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-accent-300 hover:text-accent-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-accent-600 dark:hover:text-accent-400"
          >
            <Download size={18} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 inline-flex flex-col items-center gap-2 text-gray-400 transition-colors hover:text-accent-600 dark:hover:text-accent-400"
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
