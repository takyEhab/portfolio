import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { aboutBio, aboutStats, education, certifications } from '../data/experience';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="About Me"
          subtitle="A bit about my journey and what drives me as a developer."
        />

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              {aboutBio}
            </p>

            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-accent-600 dark:text-accent-400" />
                <h3 className="font-heading font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                {education.degree}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {education.school} · {education.graduation}
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                {education.coursework}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-accent-600 dark:text-accent-400" />
                <h3 className="font-heading font-semibold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>
              <ul className="mt-3 space-y-2">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="text-sm text-gray-600 dark:text-gray-400 before:mr-2 before:text-accent-600 before:content-['•'] dark:before:text-accent-400"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 gap-4"
          >
            {aboutStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
              >
                <p className="font-heading text-3xl font-bold text-accent-600 dark:text-accent-400">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
