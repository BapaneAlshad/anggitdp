import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  aside?: ReactNode;
}

export function SectionHeading({ id, index, label, title, description, aside }: SectionHeadingProps) {
  return (
    <div className="section-heading" data-reveal>
      <div className="section-heading__main">
        <p className="eyebrow"><span>{index}</span><span className="eyebrow__line" aria-hidden="true" />{label}</p>
        <h2 id={id} className="section-title">{title}</h2>
        {description && <div className="section-description">{description}</div>}
      </div>
      {aside && <div className="section-heading__aside">{aside}</div>}
    </div>
  );
}

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return <span aria-hidden="true" className={`brand-mark${inverse ? " brand-mark--inverse" : ""}`}>ap<span>.</span></span>;
}
