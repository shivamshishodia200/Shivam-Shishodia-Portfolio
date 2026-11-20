import { motion } from 'motion/react';
import { Check, ArrowUpRight, Megaphone, Globe, Layers, Bot, Monitor, Smartphone } from 'lucide-react';
import { ABOUT_HIGHLIGHTS } from '../data/portfolioData';
import { usePortfolio } from '../data/PortfolioContext';

const SERVICE_ICONS: Record<string, any> = {
  'mobile-apps': Smartphone,
  'social-media-ads': Megaphone,
  'websites-storefronts': Globe,
  'crm-workflows': Layers,
  'ai-agents': Bot,
  'desktop-ui': Monitor,
};

export default function AboutSkills() {
  const { profile: PROFILE, skills: SKILLS, services: SERVICES } = usePortfolio();

  return (
    <>
      {/* About & Services Section */}
      <section
        id="about"
        className="border-b border-zinc-200/80 py-16 lg:py-24 dark:border-zinc-800/80"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Editorial Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600 dark:text-orange-400">
                About Me
              </p>

              <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-4xl leading-tight">
                Engineering Practical{' '}
                <span className="font-serif italic font-semibold text-orange-600 dark:text-orange-400">
                  Solutions
                </span>{' '}
                That Scale
              </h2>

              <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                Based in {PROFILE.address}, I partner with founders, manufacturers, and operations
                teams to build fast software and lead-generation engines. From Meta ad campaigns and
                B2B enquiry funnels to industrial catalogues, dispatch CRMs, and AI integrations, every
                deliverable is engineered for real-world impact and reliability.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ABOUT_HIGHLIGHTS.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-orange-500/15 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 underline decoration-orange-500 decoration-2 underline-offset-4 transition-colors hover:text-orange-600 dark:text-white dark:hover:text-orange-400"
                >
                  <span>Discuss your project scope</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/Shivam55-bit?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold underline decoration-zinc-400 underline-offset-4 hover:text-orange-600 dark:hover:text-orange-400"
                >
                  GitHub · Shivam55-bit
                </a>
                <a
                  href="https://github.com/shivamshishodia200?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold underline decoration-zinc-400 underline-offset-4 hover:text-orange-600 dark:hover:text-orange-400"
                >
                  GitHub · shivamshishodia200
                </a>
              </div>
            </motion.div>

            {/* Right Services & Capabilities Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              {SERVICES.map((srv, idx) => {
                const IconComponent = SERVICE_ICONS[srv.id] || Layers;
                return (
                  <motion.div
                    key={srv.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex flex-col justify-between rounded-2xl border p-6 transition-colors duration-200 ${
                      srv.id === 'social-media-ads'
                        ? 'border-orange-500/40 bg-orange-500/[0.04] dark:border-orange-500/30 dark:bg-orange-500/[0.05] sm:col-span-2'
                        : 'border-zinc-200/90 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-[#17191D] dark:hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                          <IconComponent className="h-4 w-4" />
                        </span>
                        <span className="font-mono font-semibold tabular-nums text-orange-600 dark:text-orange-400">
                          {srv.index}.
                        </span>
                      </div>
                      <span className="font-medium text-xs rounded-full px-2.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {srv.metric}
                      </span>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-lg font-bold tracking-tight text-zinc-950 dark:text-white">
                        {srv.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {srv.subtitle}
                      </p>
                    </div>

                    {srv.features && (
                      <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60">
                        {srv.features.slice(0, 3).map((feat) => (
                          <span
                            key={feat}
                            className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400"
                          >
                            • {feat}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section
        id="skills"
        className="border-b border-zinc-200/80 py-16 lg:py-24 dark:border-zinc-800/80"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600 dark:text-orange-400">
                Technical Capabilities
              </p>
              <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                Explore Skills &amp;{' '}
                <span className="font-serif italic font-semibold text-orange-600 dark:text-orange-400">
                  Expertise
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Full-lifecycle delivery from paid ad campaigns and marketing funnels to React
              architecture, REST APIs, operational CRMs, and production deployment.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-2xl border p-6 ${
                  skill.id === 'social-media-ads'
                    ? 'border-orange-500/40 bg-orange-500/[0.04] dark:border-orange-500/30 dark:bg-orange-500/[0.05]'
                    : 'border-zinc-200/90 bg-white dark:border-zinc-800 dark:bg-[#17191D]'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {skill.category}
                    </p>
                    <h3 className="mt-1 text-base font-bold text-zinc-950 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="font-mono text-sm font-bold tabular-nums text-orange-600 dark:text-orange-400">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Track */}
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: skill.percentage / 100 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.7, delay: 0.1 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full w-full origin-left rounded-full bg-orange-500"
                  />
                </div>

                <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">{skill.tools}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
