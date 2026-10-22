import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Server,
  ShieldCheck,
  Calendar,
  CreditCard,
  Sun,
  Moon,
  ExternalLink,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { waraqaProject } from '../data/waraqaData';

export default function WaraqaPage({ onBack }) {
  const { theme, toggleTheme } = useTheme();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const screenshots = waraqaProject.screenshots;

  const filters = [
    { id: 'all', label: 'All Screenshots', count: screenshots.length },
    {
      id: 'admin',
      label: 'Admin & Analytics',
      match: (item) => ['Admin Dashboard', 'Authentication'].includes(item.tag),
    },
    {
      id: 'academic',
      label: 'Academics & Schedules',
      match: (item) =>
        ['Course Scheduling', 'Staff Directory', 'Classroom Schedule'].includes(
          item.tag,
        ),
    },
    {
      id: 'users',
      label: 'Students & Guardians',
      match: (item) =>
        ['Guardian Portal', 'Student Records', 'Teacher Portal'].includes(
          item.tag,
        ),
    },
    {
      id: 'finance',
      label: 'Billing & Ledger',
      match: (item) => item.tag === 'Billing & Ledger',
    },
  ];

  const filteredScreenshots =
    activeFilter === 'all'
      ? screenshots
      : screenshots.filter((item) => {
          const filterObj = filters.find((f) => f.id === activeFilter);
          return filterObj && filterObj.match ? filterObj.match(item) : true;
        });

  // Modal keyboard navigation
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev + 1) % screenshots.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedImageIndex(
          (prev) => (prev - 1 + screenshots.length) % screenshots.length,
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImageIndex, screenshots.length]);

  const highlightIcons = [
    <ShieldCheck key="shield" className="h-5 w-5 text-accent-500" />,
    <Calendar key="cal" className="h-5 w-5 text-accent-500" />,
    <CreditCard key="card" className="h-5 w-5 text-accent-500" />,
    <Server key="srv" className="h-5 w-5 text-accent-500" />,
  ];

  return (
    <div className="min-h-screen bg-white font-body text-gray-900 transition-colors duration-200 dark:bg-gray-950 dark:text-gray-100">
      {/* Top Sticky Bar */}
      <header className="sticky top-0 z-40 border-b border-gray-200/80 bg-white/80 backdrop-blur-md dark:border-gray-800/80 dark:bg-gray-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-accent-400 hover:bg-accent-50 hover:text-accent-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-accent-600 dark:hover:bg-accent-950 dark:hover:text-accent-300"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span>Back to Portfolio</span>
          </button>

          <div className="hidden items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 sm:flex">
            <span>Portfolio</span>
            <span>/</span>
            <span>Projects</span>
            <span>/</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              Waraqa (ورقة)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
              }
              className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-accent-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-accent-400"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero / Overview Section */}
      <section className="px-4 pt-12 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-800 dark:bg-accent-950 dark:text-accent-300">
                Client Production System
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                Timeline: {waraqaProject.timeline}
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                Alexandria, Egypt
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                DigitalOcean Linux VPS
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              {waraqaProject.title}
            </h1>
            <p className="mt-2 text-lg font-medium text-accent-600 sm:text-xl dark:text-accent-400">
              {waraqaProject.subtitle}
            </p>

            {/* Narrative Overview */}
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
              {waraqaProject.overview}
            </p>

            {/* Tech Stack Chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {waraqaProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Architectural Highlights Grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {waraqaProject.highlights.map((highlight, idx) => (
                <div
                  key={highlight.title}
                  className="rounded-xl border border-gray-200/90 bg-white p-5 shadow-sm transition-all hover:border-accent-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-accent-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 dark:bg-accent-950/80">
                      {highlightIcons[idx % highlightIcons.length]}
                    </div>
                    <h3 className="font-heading text-sm font-semibold text-gray-900 dark:text-white">
                      {highlight.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                    {highlight.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="border-t border-gray-200/80 bg-gray-50/60 px-4 py-16 transition-colors dark:border-gray-800/80 dark:bg-gray-900/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                <span>Production Showcase</span>
                <span>•</span>
                <span>{screenshots.length} Screenshots</span>
              </div>
              <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                System Interface & Workflow Gallery
              </h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Click any screenshot to inspect the full interface in high resolution.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-1.5">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveFilter(f.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    activeFilter === f.id
                      ? 'bg-accent-600 text-white shadow-sm dark:bg-accent-500'
                      : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Screenshot Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredScreenshots.map((item, index) => {
              const globalIndex = screenshots.findIndex((s) => s.id === item.id);
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedImageIndex(globalIndex)}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-400 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-accent-600"
                >
                  {/* Image container */}
                  <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Tag badge */}
                    <div className="absolute top-3 left-3">
                      <span className="rounded-md bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                        {item.tag}
                      </span>
                    </div>

                    {/* Hover overlay cue */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/35 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-gray-900 shadow-md">
                        <Maximize2 size={13} />
                        Inspect Full Size
                      </span>
                    </div>
                  </div>

                  {/* Caption & details */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading text-base font-semibold text-gray-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
                        {item.title}
                      </h3>
                      <span className="shrink-0 text-xs text-gray-400 dark:text-gray-500">
                        #{globalIndex + 1}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                      {item.caption}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox / Fullscreen Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-6"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-950 text-white shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-accent-600/30 px-2.5 py-0.5 text-xs font-semibold text-accent-300">
                    {screenshots[selectedImageIndex].tag}
                  </span>
                  <span className="text-sm font-medium text-gray-300">
                    {screenshots[selectedImageIndex].title}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400">
                    {selectedImageIndex + 1} / {screenshots.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedImageIndex(null)}
                    aria-label="Close modal"
                    className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Main Image Display */}
              <div className="relative flex flex-1 items-center justify-center overflow-auto bg-black/50 p-2 sm:p-4">
                <img
                  src={screenshots[selectedImageIndex].image}
                  alt={screenshots[selectedImageIndex].title}
                  className="max-h-[68vh] w-auto max-w-full rounded-lg object-contain shadow-lg"
                />

                {/* Left/Right controls */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedImageIndex(
                      (prev) =>
                        (prev - 1 + screenshots.length) % screenshots.length,
                    )
                  }
                  aria-label="Previous screenshot"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2.5 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-110 sm:left-6"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedImageIndex(
                      (prev) => (prev + 1) % screenshots.length,
                    )
                  }
                  aria-label="Next screenshot"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2.5 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-110 sm:right-6"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Footer caption */}
              <div className="flex items-center justify-between border-t border-white/10 bg-gray-900/90 px-5 py-3">
                <p className="text-xs text-gray-300 sm:text-sm">
                  {screenshots[selectedImageIndex].caption}
                </p>
                <div className="hidden shrink-0 items-center gap-2 pl-4 text-xs text-gray-400 sm:flex">
                  <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px]">
                    ←
                  </kbd>
                  <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px]">
                    →
                  </kbd>
                  <span>Navigate</span>
                  <kbd className="ml-2 rounded bg-white/10 px-1.5 py-0.5 text-[10px]">
                    ESC
                  </kbd>
                  <span>Close</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA / Return */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 rounded-2xl border border-gray-200 bg-gradient-to-r from-gray-50 to-accent-50/30 p-8 text-center sm:flex-row sm:text-left dark:border-gray-800 dark:from-gray-900 dark:to-accent-950/20">
          <div>
            <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
              Interested in full-stack web applications?
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Explore the rest of my portfolio or reach out to discuss custom solutions.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-accent-700 hover:shadow-md dark:bg-accent-500 dark:hover:bg-accent-600"
            >
              <ArrowLeft size={16} />
              <span>Back to Portfolio</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
