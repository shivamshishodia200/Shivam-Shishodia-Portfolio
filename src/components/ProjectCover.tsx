import { ProjectItem } from '../data/portfolioData';
import ProjectVisual from './ProjectVisual';

interface ProjectCoverProps {
  project: ProjectItem;
  priority?: boolean;
  className?: string;
}

export default function ProjectCover({ project, priority = false, className = '' }: ProjectCoverProps) {
  const escapeXml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const category = escapeXml(project.category);
  const title = escapeXml(project.title);
  const summary = escapeXml(project.shortSummary);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#26160d"/><stop offset="1" stop-color="#111215"/></linearGradient></defs><rect width="960" height="540" fill="url(#g)"/><circle cx="790" cy="110" r="150" fill="#f97316" opacity=".12"/><rect x="70" y="70" width="820" height="400" rx="28" fill="#17191d" stroke="#fb923c" stroke-opacity=".35"/><text x="116" y="190" fill="#fb923c" font-family="Arial" font-size="28" font-weight="700">${category}</text><text x="116" y="280" fill="#fff" font-family="Arial" font-size="62" font-weight="800">${title}</text><text x="116" y="350" fill="#d4d4d8" font-family="Arial" font-size="26">${summary}</text></svg>`;
  const fallbackSrc = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

  return (
    <picture className={`block h-full w-full ${className}`}>
      {project.coverImage && <source srcSet={project.coverImage} type="image/avif" />}
      {project.coverImage && <source srcSet={project.coverImage} type="image/webp" />}
      <img
        src={project.coverImage || fallbackSrc}
        alt={project.coverAlt || `Branded cover for ${project.title}, ${project.category}`}
        width="960"
        height="540"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="h-full w-full object-cover"
      />
      {!project.coverImage && (
        <span className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-black/75 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-300">
          Illustrative preview
        </span>
      )}
      <span className="pointer-events-none absolute inset-0 overflow-hidden opacity-0" aria-hidden="true">
        <ProjectVisual project={project} />
      </span>
    </picture>
  );
}
