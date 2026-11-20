import { usePortfolio } from '../data/PortfolioContext';

export default function Footer() {
  const { profile: PROFILE } = usePortfolio();
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <div className="text-sm font-bold text-zinc-950 dark:text-white">
            {PROFILE.name}
          </div>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            {PROFILE.address} ·{' '}
            <a
              href={`mailto:${PROFILE.email}`}
              className="hover:text-zinc-900 dark:hover:text-white underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-2"
            >
              {PROFILE.email}
            </a>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-500 dark:text-zinc-400">
          <a href="https://github.com/Shivam55-bit?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white">
            GitHub · Shivam55-bit
          </a>
          <a href="https://github.com/shivamshishodia200?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white">
            GitHub · shivamshishodia200
          </a>
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-white">
            About
          </a>
          <a href="#projects" className="hover:text-zinc-900 dark:hover:text-white">
            Projects
          </a>
          <a href="#testimonials" className="hover:text-zinc-900 dark:hover:text-white">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white">
            Contact
          </a>
          <span className="text-zinc-400 dark:text-zinc-500">
            © {new Date().getFullYear()} {PROFILE.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
