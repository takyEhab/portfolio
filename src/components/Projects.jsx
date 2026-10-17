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
          {projects.map((project) =>
            project.featured ? (
              <motion.article
                key={project.id}
                variants={cardVariants}
                className="col-span-full group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
              >
                {/* Dual Photos Container with generous breathing room and ambient dark canvas */}
                <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-4 sm:p-6 lg:p-8">
                  <div className="overflow-hidden rounded-xl border border-slate-700/60 shadow-2xl bg-slate-950/80 p-2 sm:p-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Dual-Frontend Architecture Showcase
                    </span>
                    <span className="text-slate-500">
                      DeliveryHub Pro (B2B SaaS) &nbsp;•&nbsp; Prince of the Seas (Oceanic Dark Retail)
                    </span>
                  </div>
                </div>

                {/* Content divided cleanly under the photo */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700 dark:bg-accent-950 dark:text-accent-300">
                      Flagship Project
                    </span>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      {project.dates}
                    </span>
                  </div>

                  <h3 className="mt-3 font-heading text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-400">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                    {project.description}
                  </p>

                  {/* Divided Feature Columns */}
                  {project.dividedFeatures && (
                    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {project.dividedFeatures.map((sec) => {
                        const isCyan = sec.theme === 'cyan';
                        const isBlue = sec.theme === 'blue';
                        const isEmerald = sec.theme === 'emerald';

                        return (
                          <div
                            key={sec.title}
                            className={`flex flex-col justify-between rounded-xl border p-4 transition-all duration-200 ${
                              isCyan
                                ? 'border-cyan-500/20 bg-gradient-to-b from-cyan-950/10 to-transparent dark:border-cyan-500/30 dark:from-cyan-950/30'
                                : isBlue
                                ? 'border-blue-500/20 bg-gradient-to-b from-blue-950/10 to-transparent dark:border-blue-500/30 dark:from-blue-950/30'
                                : 'border-emerald-500/20 bg-gradient-to-b from-emerald-950/10 to-transparent dark:border-emerald-500/30 dark:from-emerald-950/30'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2">
                                <h4
                                  className={`text-sm font-bold ${
                                    isCyan
                                      ? 'text-cyan-700 dark:text-cyan-300'
                                      : isBlue
                                      ? 'text-blue-700 dark:text-blue-300'
                                      : 'text-emerald-700 dark:text-emerald-300'
                                  }`}
                                >
                                  {sec.title}
                                </h4>
                                <span
                                  className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                                    isCyan
                                      ? 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300'
                                      : isBlue
                                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                                      : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                                  }`}
                                >
                                  {sec.badge}
                                </span>
                              </div>

                              <ul className="mt-3.5 space-y-2 text-xs text-gray-600 dark:text-gray-300">
                                {sec.points.map((pt, idx) => (
                                  <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                                    <span
                                      className={`mt-0.5 text-xs font-bold ${
                                        isCyan
                                          ? 'text-cyan-500'
                                          : isBlue
                                          ? 'text-blue-500'
                                          : 'text-emerald-500'
                                      }`}
                                    >
                                      •
                                    </span>
                                    <span>
                                      <strong className="font-semibold text-gray-900 dark:text-gray-100">
                                        {pt.bold}
                                      </strong>{' '}
                                      {pt.text}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/80">
                              <a
                                href={sec.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex w-full items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                                  isCyan
                                    ? 'bg-cyan-600 text-white hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600'
                                    : isBlue
                                    ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                                    : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                                }`}
                              >
                                {isEmerald ? <Github size={13} /> : <ExternalLink size={13} />}
                                {sec.linkText}
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Tech Tags & Links Footer */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                        >
                          <Github size={14} />
                          Repository
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ) : (
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
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

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
                              className="inline-flex items-center gap-1 rounded-md bg-accent-50 px-2 py-1 text-xs font-medium text-accent-700 transition-colors hover:bg-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:hover:bg-accent-900/50"
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
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}

