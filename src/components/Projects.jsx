import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/projects';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of recent work spanning full-stack development."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Project Image or Gradient Placeholder */}
              {project.image ? (
                <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                </div>
              ) : (
                <div
                  className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${project.imageGradient}`}
                >
                  <span className="font-heading text-2xl font-bold text-white/90">
                    {project.title.split(' ')[0]}
                  </span>
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                </div>
              )}

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="mt-1 text-xs font-medium text-accent-600 dark:text-accent-400">
                    {project.subtitle}
                  </p>
                )}
                <p
                  className={`mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 ${
                    !project.bullets ? 'flex-1' : ''
                  }`}
                >
                  {project.description}
                </p>

                {/* Bullets if present */}
                {project.bullets && (
                  <ul className="mt-2.5 flex-1 space-y-2 text-xs text-gray-600 dark:text-gray-300">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                        <span>
                          <strong className="font-semibold text-gray-900 dark:text-gray-100">
                            {bullet.bold}:{' '}
                          </strong>
                          {bullet.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/40 px-2 py-0.5 text-xs font-medium text-slate-800 backdrop-blur-sm dark:bg-black/30 dark:text-slate-200 dark:border dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.github || project.live || project.demos) && (
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-4 dark:border-gray-800">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.demos ? (
                        project.demos.map((demo) => (
                          <a
                            key={demo.label}
                            href={demo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-accent-200/80 bg-accent-50/90 px-2.5 py-1.5 text-xs font-medium text-accent-700 shadow-sm transition-all hover:bg-accent-100 hover:text-accent-900 dark:border-accent-700/60 dark:bg-accent-950/70 dark:text-accent-300 dark:shadow-none dark:hover:border-accent-500 dark:hover:bg-accent-900/60 dark:hover:text-white"
                          >
                            <ExternalLink size={12} />
                            {demo.label}
                          </a>
                        ))
                      ) : project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                          className="inline-flex items-center gap-1.5 rounded-lg p-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-accent-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-accent-400"
                        >
                          <ExternalLink size={18} />
                          <span className="text-xs">Live Demo</span>
                        </a>
                      ) : null}
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
