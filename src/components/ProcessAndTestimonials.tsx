import { ArrowUpRight, Plus, Quote } from "lucide-react";
import { consultationSteps, presentation, sectionCopy, testimonialDisclosure, testimonials } from "../data/siteData";
import { SectionHeading } from "./DesignSystem";

export function ProcessAndTestimonials() {
  return (
      <section id="proses" aria-labelledby="proses-heading" className="section">
        <div className="site-shell">
          <SectionHeading id="proses-heading" index="06" label={presentation.process.label} title={sectionCopy.consultation.title} />
          <ol className="process-grid">
            {consultationSteps.map((step, index) => (
              <li key={step.stepNumber} className="process-step" data-reveal>
                <span className="process-step__number"><span className="sr-only">Langkah </span>{String(step.stepNumber).padStart(2, "0")}</span>
                {index < consultationSteps.length - 1 && <ArrowUpRight className="process-step__arrow" aria-hidden="true" />}
                <h3>{step.title}</h3><p>{step.description}</p>
              </li>
            ))}
          </ol>
          <details id="testimoni" className="compact-details testimonials-details">
            <summary>{sectionCopy.testimonials.title}<Plus aria-hidden="true" /></summary>
            <p className="testimonial-disclosure">{testimonialDisclosure}</p>
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.id} className="testimonial-card">
                  <Quote aria-hidden="true" /><blockquote><p>“{testimonial.quote}”</p></blockquote><figcaption>{testimonial.roleLabel}</figcaption>
                </figure>
              ))}
            </div>
          </details>
        </div>
      </section>
  );
}
export default ProcessAndTestimonials;
