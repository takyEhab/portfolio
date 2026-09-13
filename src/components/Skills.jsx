import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Wrench,
  Globe,
  Layers,
  FileCode,
  Palette,
  Box,
  Network,
  GitBranch,
  Lock,
  Leaf,
  HardDrive,
  Zap,
  Cloud,
  RefreshCw,
  PenTool,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { skillCategories } from '../data/skills';

const iconMap = {
  react: Layers,
  javascript: Code2,
  html: Globe,
  css: Palette,
  tailwind: Palette,
  redux: Box,
  nodejs: Server,
  express: Server,
  api: Network,
  graphql: GitBranch,
  auth: Lock,
  mongodb: Leaf,
  postgresql: Database,
  redis: HardDrive,
  mongoose: Leaf,
  git: GitBranch,
  docker: Box,
  aws: Cloud,
  cicd: RefreshCw,
  vite: Zap,
  figma: PenTool,
};

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  database: Database,
  tools: Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-gray-50 px-4 py-20 dark:bg-gray-900/50 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I use to bring ideas to life."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = categoryIcons[category.id] || Code2;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-4 flex items-center gap-2">
                  <CategoryIcon size={20} className="text-accent-600 dark:text-accent-400" />
                  <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = iconMap[skill.icon] || FileCode;
                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-accent-300 hover:bg-accent-50 hover:text-accent-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-accent-600 dark:hover:bg-accent-950/50 dark:hover:text-accent-300"
                      >
                        <SkillIcon size={14} className="text-accent-600 dark:text-accent-400" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
