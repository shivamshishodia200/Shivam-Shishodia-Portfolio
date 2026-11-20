import { motion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, Code2, Layers, Mail, MapPin, Smartphone, Sparkles, Terminal } from 'lucide-react';
import { usePortfolio } from '../data/PortfolioContext';

export default function Hero() {
  const { profile: PROFILE, metrics: HERO_METRICS } = usePortfolio();
  const visibleMetrics = HERO_METRICS.filter((item: any) => item.visible !== false);
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-12 sm:px-6 lg:px-8 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Visual Column — Studio Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col justify-between lg:col-span-5"
          >
            <div className="relative flex h-full min-h-[390px] flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#17191D]">
              {/* Top Row inside Studio Card: Circular Badge + Stack Dock */}
              <div className="flex items-start justify-between gap-4">
                {/* Floating Core Stack Vertical Strip */}
                <div className="flex flex-col items-start gap-2.5">
                  <span className="text-[11px] font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
                    Core Stack
                  </span>
                  <div className="flex flex-col gap-2">
                    {[
                      { icon: Smartphone, label: 'RN & Flutter' },
                      { icon: Code2, label: 'React / TS' },
                      { icon: Layers, label: 'Tailwind UI' },
                      { icon: Terminal, label: 'APIs & Ads' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-[#1F2228] dark:text-zinc-200"
                      >
                        <item.icon className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400" />
                        <span className="whitespace-nowrap">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Circular Rotating Freelance Badge */}
                <a
                  href="#contact"
                  aria-label="Hire Shivam Shishodia"
                  className="group relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-dashed border-orange-500/50 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 h-full w-full animate-[spin_20s_linear_infinite]"
                    aria-hidden="true"
                  >
                    <defs>
                      <path
                        id="hireBadgeCircle"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text className="fill-zinc-600 dark:fill-zinc-300 text-[9px] font-semibold uppercase tracking-[0.22em]">
                      <textPath href="#hireBadgeCircle">
                        FREELANCE · AVAILABLE · HIRE ME ·
                      </textPath>
                    </text>
                  </svg>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-zinc-950 transition-transform duration-200 group-hover:rotate-12 group-hover:bg-orange-600">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </a>
              </div>

              {/* Studio Profile Image Focal Piece */}
              <div className="relative my-6 flex flex-1 items-center justify-center">
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="relative h-48 w-48 sm:h-56 sm:w-56 overflow-hidden rounded-full shadow-2xl shadow-orange-500/10 ring-2 ring-orange-500/40 transition-transform duration-300 hover:scale-[1.03]">
                    <img
                      src={PROFILE.avatar || '/assets/profile-image-portfolio.png'}
                      alt={PROFILE.name}
                      width="224"
                      height="224"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <p className="mt-4 text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                    {PROFILE.name}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                    <MapPin className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400" />
                    <span>{PROFILE.shortLocation}</span>
                  </p>
                </div>
              </div>

              {/* Bottom Strip inside Card: Direct Contact Anchor */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-zinc-200/80 pt-4 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                <span className="truncate font-mono">{PROFILE.email}</span>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-1 font-semibold text-zinc-900 hover:text-orange-600 dark:text-zinc-200 dark:hover:text-orange-400 whitespace-nowrap shrink-0"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Direct Email</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Typographic Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col justify-center lg:col-span-7"
          >
            {/* Subtle Geometric Starburst Accent */}
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              aria-hidden="true"
              className="pointer-events-none absolute right-2 bottom-2 hidden sm:block text-orange-500/25 dark:text-orange-500/35"
            >
              <path
                d="M36 4V68M4 36H68M13.37 13.37L58.63 58.63M58.63 13.37L13.37 58.63"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>

            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              Hi, I&apos;m {PROFILE.name}
            </p>

            <h1 className="mt-4 max-w-2xl text-balance text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-5xl xl:text-6xl leading-[1.08]">
              {PROFILE.headlineLead} <br className="hidden sm:inline" />
              {PROFILE.headlineMiddle}{' '}
              <span className="font-serif italic font-semibold text-orange-600 dark:text-orange-400">
                {PROFILE.headlineItalic}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-lg">
              I design and engineer production{' '}
              <strong className="font-extrabold text-zinc-950 dark:text-white">web and app platforms</strong>,{' '}
              <strong className="font-extrabold text-zinc-950 dark:text-white">CRM systems</strong>,{' '}
              <strong className="font-extrabold text-zinc-950 dark:text-white">performance ad campaigns</strong>, and
              lead-generation funnels. Focused on clean architecture, high conversions, and dependable deployment.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <span>{PROFILE.availability}</span>
              <span aria-hidden="true">·</span>
              <span>{PROFILE.address}</span>
            </div>

            {/* Primary CTA Pair */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-bold text-zinc-950 transition-all duration-150 hover:bg-orange-600 active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white"
              >
                <span>Explore Projects</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors duration-150 hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-[#17191D] dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-[#1E2026] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <Sparkles className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span>Start a Freelance Project</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column KPI Strip Below Hero Split */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-2 gap-4 border-t border-zinc-200/80 pt-8 sm:grid-cols-4 dark:border-zinc-800/80"
        >
          {visibleMetrics.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-zinc-200/80 bg-white px-5 py-4 dark:border-zinc-800 dark:bg-[#17191D]"
            >
              <div className="font-mono text-2xl font-bold tracking-tight text-zinc-950 tabular-nums dark:text-white sm:text-3xl">
                {item.value}
              </div>
              <div className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
