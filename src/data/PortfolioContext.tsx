import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { PROFILE, SKILLS, SERVICES, HERO_METRICS, PROJECTS, TESTIMONIALS } from './portfolioData';

export type PortfolioContent = {
  profile: typeof PROFILE;
  skills: typeof SKILLS;
  services: typeof SERVICES;
  metrics: typeof HERO_METRICS;
  projects: typeof PROJECTS;
  testimonials: typeof TESTIMONIALS;
};

const fallback: PortfolioContent = {
  profile: PROFILE,
  skills: SKILLS,
  services: SERVICES,
  metrics: HERO_METRICS,
  projects: PROJECTS,
  testimonials: TESTIMONIALS,
};

const PortfolioContext = createContext<PortfolioContent>(fallback);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<PortfolioContent>(fallback);

  useEffect(() => {
    fetch('/api/content')
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data) => setContent({
        profile: data.profile || fallback.profile,
        skills: data.skills || fallback.skills,
        services: data.services || fallback.services,
        metrics: data.metrics || fallback.metrics,
        projects: data.projects || fallback.projects,
        testimonials: data.testimonials?.length ? data.testimonials : fallback.testimonials,
      }))
      .catch(() => setContent(fallback));
  }, []);

  return <PortfolioContext.Provider value={content}>{children}</PortfolioContext.Provider>;
}

export function usePortfolio() {
  return useContext(PortfolioContext);
}
