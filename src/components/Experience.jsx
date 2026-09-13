import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-gray-50 px-4 py-20 dark:bg-gray-900/50 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in software development."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 md:left-1/2 md:-translate-x-px" />

          {experience.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-10 flex flex-col md:mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent-600 bg-white dark:bg-gray-900 md:left-1/2 md:-translate-x-1/2">
                <Briefcase size={16} className="text-accent-600 dark:text-accent-400" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden w-1/2 md:block" />

              {/* Content card */}
              <div
                className={`ml-14 w-full md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'
                }`}
              >
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <p className="text-sm font-medium text-accent-600 dark:text-accent-400">
                    {entry.dates}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-gray-900 dark:text-white">
                    {entry.role}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {entry.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {entry.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
