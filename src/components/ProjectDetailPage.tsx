import { ArrowLeft, ArrowUpRight, ExternalLink, Lock, Sparkles, TrendingUp } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { usePortfolio } from '../data/PortfolioContext';
import ProjectCover from './ProjectCover';

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const { projects } = usePortfolio();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-500">Case study unavailable</p>
        <h1 className="mt-3 text-3xl font-extrabold text-zinc-950 dark:text-white">Project not found</h1>
        <Link to="/#projects" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-600 dark:text-orange-400">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>
      </main>
    );
  }

  const hasValidUrl = Boolean(project.externalUrl && project.externalUrl.trim() !== '');
  const externalActionLabel = project.actionLabel
    ? project.actionLabel
    : project.status === 'auth-required'
      ? 'Open System'
      : hasValidUrl
        ? 'Live Project'
        : 'Demo Pending';

  return (
    <main className="pb-20">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-600 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>

        <div className="mt-7 grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <ProjectCover project={project} priority />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600 dark:text-orange-400">
                {project.category}
              </span>
              {project.categories && project.categories.length > 1 && (
                <span className="rounded-full bg-orange-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                  {project.categories.join(' · ')}
                </span>
              )}
            </div>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              {project.fullDescription}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {hasValidUrl ? (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold text-zinc-950 transition-colors hover:bg-orange-600"
                >
                  {project.status === 'auth-required' && <Lock className="h-4 w-4" />}
                  {externalActionLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-zinc-300 px-5 py-3 text-sm font-bold text-zinc-400 dark:border-zinc-700"
                >
                  <Lock className="h-4 w-4" /> Demo Pending
                </button>
              )}

              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-3 text-sm font-bold transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-600"
                >
                  <ExternalLink className="h-4 w-4" /> View Source
                </a>
              )}
            </div>

            {project.status === 'auth-required' && (
              <p className="mt-3 text-xs font-medium text-amber-700 dark:text-amber-400">
                {project.accessNote}
              </p>
            )}
          </div>
        </div>

        {/* Deliverables & Highlights Grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <section className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#17191D]">
            <h2 className="text-sm font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
              Project Goal
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {project.projectGoal || project.shortSummary}
            </p>
          </section>

          <section className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#17191D]">
            <h2 className="text-sm font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
              Key Deliverables
            </h2>
            <ul className="mt-3 space-y-2">
              {project.highlights.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  • {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#17191D]">
            <h2 className="text-sm font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
              Tech Stack &amp; Tools
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Marketing-Related Sections: Brand Visuals & Enquiry Flow Architecture */}
        {project.marketingFlow && (
          <div className="mt-8 rounded-2xl border border-orange-500/30 bg-orange-500/[0.03] p-6 sm:p-8 dark:border-orange-500/20 dark:bg-orange-500/[0.04]">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/15 text-orange-600 dark:text-orange-400">
                <TrendingUp className="h-4 w-4" />
              </span>
              <h2 className="text-lg font-bold tracking-tight text-zinc-950 dark:text-white">
                Brand Visuals &amp; Enquiry Flow Architecture
              </h2>
            </div>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              Conversion-focused visual presentation and lead-capture flow designed for real-world B2B scannability.
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <section className="rounded-xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-[#17191D]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                  <Sparkles className="h-4 w-4" />
                  <span>Brand Visuals &amp; Structure</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {project.marketingFlow.brandVisuals}
                </p>
              </section>

              <section className="rounded-xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-[#17191D]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>Enquiry Flow &amp; Conversion</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {project.marketingFlow.enquiryFlow}
                </p>
              </section>
            </div>
          </div>
        )}

        {project.ownContribution && (
          <section className="mt-6 rounded-2xl border border-orange-500/30 bg-orange-500/[0.04] p-6 dark:border-orange-500/20 dark:bg-orange-500/[0.05]">
            <h2 className="text-sm font-bold uppercase tracking-wider text-orange-700 dark:text-orange-300">
              My Contribution
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {project.ownContribution}
            </p>
          </section>
        )}

        {project.confirmedFeatures && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <section className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
              <h2 className="text-sm font-bold text-zinc-800 dark:text-zinc-200">Confirmed completed</h2>
              <ul className="mt-3 space-y-2">
                {project.confirmedFeatures.map((item) => (
                  <li key={item} className="text-sm text-zinc-600 dark:text-zinc-300">
                    • {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
              <h2 className="text-sm font-bold text-zinc-800 dark:text-zinc-200">Awaiting confirmation</h2>
              <ul className="mt-3 space-y-2">
                {project.pendingFeatures?.map((item) => (
                  <li key={item} className="text-sm text-zinc-600 dark:text-zinc-300">
                    • {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}

        <section className="mt-12">
          <h2 className="text-2xl font-extrabold text-zinc-950 dark:text-white">
            Screenshot Gallery
          </h2>
          {project.gallery?.length ? (
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {project.gallery.map((image) => (
                <figure key={image.src} className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#17191D]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width="960"
                    height="540"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <figcaption className="p-3 text-xs text-zinc-500 dark:text-zinc-400">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="mt-5 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
              <ProjectCover project={project} />
              <p className="p-3 text-xs text-zinc-500 dark:text-zinc-400">
                Approved project creative preview.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
