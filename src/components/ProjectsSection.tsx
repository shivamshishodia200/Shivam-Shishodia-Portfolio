import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Lock, Star } from 'lucide-react';
import { ProjectCategory, ProjectItem } from '../data/portfolioData';
import { usePortfolio } from '../data/PortfolioContext';
import { useNavigate } from 'react-router-dom';
import ProjectCover from './ProjectCover';

interface ProjectsSectionProps {
  onSelectForInquiry: (projectTitle: string) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Featured',
  'Mobile & Apps',
  'Marketing & Lead Generation',
  'CRM & Operations',
  'Web & E-Commerce',
  'Desktop & AI',
];

export default function ProjectsSection({ onSelectForInquiry: _onSelectForInquiry }: ProjectsSectionProps) {
  const { projects: PROJECTS } = usePortfolio();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const isCardAvailable = (project: ProjectItem) => {
    // Only display "Meta Lead Ads → CRM" when approved visuals or a live demo URL are available
    if (project.id === 'meta-lead-ads-crm') {
      return Boolean(project.coverImage || project.externalUrl);
    }
    return true;
  };

  const matchesFilter = (project: ProjectItem, filter: ProjectCategory) => {
    if (!isCardAvailable(project)) return false;
    if (filter === 'All') return true;
    if (filter === 'Featured') return project.featured;
    if (project.categories && project.categories.includes(filter)) return true;
    return project.category === filter;
  };

  const filteredProjects = PROJECTS.filter((project) => matchesFilter(project, activeFilter));

  return (
    <section
      id="projects"
      className="border-b border-zinc-200/80 py-16 lg:py-24 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header + Filter Bar */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600 dark:text-orange-400">
              Selected Work
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
              Featured{' '}
              <span className="font-serif italic font-semibold text-orange-600 dark:text-orange-400">
                Projects
              </span>{' '}
              &amp; Shipped Systems
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Real-world builds spanning B2B marketing &amp; lead gen funnels, industrial catalogues,
            delivery CRMs, attendance tracking, and desktop tooling.
          </p>
        </div>

        {/* Interactive Segmented Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mt-8 flex flex-wrap items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-100/80 p-1.5 w-fit dark:border-zinc-800 dark:bg-[#17191D]"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeFilter === category;
            const count = PROJECTS.filter((p) => matchesFilter(p, category)).length;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(category)}
                className={`relative rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                  isActive
                    ? 'text-zinc-950 font-bold'
                    : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeProjectTab"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="absolute inset-0 rounded-lg bg-orange-500"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>{category}</span>
                  <span className="font-mono text-[11px] tabular-nums opacity-85">
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Gallery Grid */}
        <motion.div layout className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white transition-colors duration-200 hover:border-orange-500/50 dark:border-zinc-800 dark:bg-[#17191D] dark:hover:border-orange-500/40"
              >
                {/* Visual Frame / Cover Image */}
                <button
                  type="button"
                  onClick={() => navigate(`/projects/${project.id}`)}
                  aria-label={`Inspect ${project.title} details`}
                  className="relative h-48 w-full overflow-hidden border-b border-zinc-200/80 text-left dark:border-zinc-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-500"
                >
                  <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-[1.03]">
                    <ProjectCover project={project} />
                  </div>
                </button>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    {/* Quiet Metadata */}
                    <div className="flex items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                      <span className="font-medium truncate">{project.category}</span>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 font-semibold text-orange-600 dark:text-orange-400 shrink-0">
                          <Star className="h-3 w-3 fill-current" />
                          <span>Featured</span>
                        </span>
                      )}
                    </div>

                    <h3 className="mt-2.5 text-lg font-bold tracking-tight text-zinc-950 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {project.shortSummary}
                    </p>

                    <div className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                      {project.stack.join(' · ')}
                    </div>
                  </div>

                  {/* Card Footer: Fixed two-action layout */}
                  <div className="mt-6 border-t border-zinc-200/80 pt-4 dark:border-zinc-800/80">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => navigate(`/projects/${project.id}`)}
                        className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg border border-zinc-300 px-3 text-xs font-bold text-zinc-900 transition-colors hover:border-orange-500 hover:text-orange-600 dark:border-zinc-700 dark:text-white dark:hover:border-orange-400 dark:hover:text-orange-300"
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>

                      {project.externalUrl && project.externalUrl.trim() !== '' ? (
                        <a
                          href={project.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg bg-orange-500 px-3 text-xs font-bold text-zinc-950 transition-colors hover:bg-orange-600"
                        >
                          {project.status === 'auth-required' && <Lock className="h-3.5 w-3.5" />}
                          <span>{project.actionLabel || 'Live Project'}</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="inline-flex min-h-10 cursor-not-allowed items-center justify-center gap-1.5 rounded-lg border border-zinc-200 px-3 text-xs font-bold text-zinc-400 dark:border-zinc-800"
                        >
                          <Lock className="h-3.5 w-3.5" />
                          <span>Demo Pending</span>
                        </button>
                      )}
                    </div>
                    {project.status === 'auth-required' && (
                      <p className="mt-2 text-right text-[11px] font-medium text-amber-700 dark:text-amber-400">
                        {project.accessNote}
                      </p>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
