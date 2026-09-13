import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center md:mb-16"
    >
      <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent-600" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
