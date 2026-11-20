import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { usePortfolio } from '../data/PortfolioContext';

export default function TestimonialsSection() {
  const { testimonials: TESTIMONIALS } = usePortfolio();
  const [activeIndex, setActiveIndex] = useState(0);
  if (!TESTIMONIALS.length) return null;
  const current = TESTIMONIALS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="border-b border-zinc-200/80 py-16 lg:py-24 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600 dark:text-orange-400">
            Client Feedback
          </p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Client Loved{' '}
            <span className="font-serif italic font-semibold text-orange-600 dark:text-orange-400">
              Testimonials
            </span>
          </h2>
        </div>

        {/* Main Testimonial Showcase Card */}
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-zinc-200/90 bg-white dark:border-zinc-800 dark:bg-[#17191D]">
          {/* Client Selector Strip */}
          <div className="grid grid-cols-2 border-b border-zinc-200/80 sm:grid-cols-4 dark:border-zinc-800/80">
            {TESTIMONIALS.map((item, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`relative px-4 py-4 text-xs font-bold tracking-tight transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-500 ${
                    isSelected
                      ? 'bg-zinc-100/90 text-zinc-950 dark:bg-[#1F2229] dark:text-white'
                      : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                  }`}
                >
                  <span className="block truncate">{item.company}</span>
                  {isSelected && (
                    <motion.span
                      layoutId="testimonialActiveBar"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Animated Quote Content */}
          <div className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1 text-orange-500" aria-label="5 out of 5 stars">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {current.projectRef}
                  </span>
                </div>

                <blockquote className="mt-6 text-lg leading-relaxed font-medium text-zinc-800 dark:text-zinc-100 sm:text-xl">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <p className="mt-4 text-xs font-medium text-orange-600 dark:text-orange-400">
                  Outcome: {current.outcome}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200/80 pt-6 dark:border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-xs font-bold text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                      {current.clientName
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-950 dark:text-white">
                        {current.clientName}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        {current.role} · {current.company}
                      </div>
                    </div>
                  </div>

                  {/* Prev / Next Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous testimonial"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-700 dark:bg-[#20232A] dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next testimonial"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-700 dark:bg-[#20232A] dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <Quote className="ml-2 hidden h-6 w-6 text-zinc-300 sm:block dark:text-zinc-700" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
