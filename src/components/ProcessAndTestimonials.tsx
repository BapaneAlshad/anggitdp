import { Info, Quote } from "lucide-react";
import {
  consultationSteps,
  sectionCopy,
  testimonialDisclosure,
  testimonials,
} from "../data/siteData";

export function ProcessAndTestimonials() {
  return (
    <div className="overflow-x-hidden bg-[#FAF9F6] text-[#0F172A]">
      <section
        id="proses"
        aria-labelledby="proses-heading"
        className="mx-auto w-full min-w-0 max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <h2
          id="proses-heading"
          className="mb-8 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:mb-10 sm:text-4xl"
        >
          {sectionCopy.consultation.title}
        </h2>

        <ol role="list" className="grid min-w-0 grid-cols-1 lg:grid-cols-4 lg:gap-6">
          {consultationSteps.map((step, index) => (
            <li
              key={step.stepNumber}
              className="relative grid min-w-0 grid-cols-[48px_minmax(0,1fr)] gap-x-4 pb-6 last:pb-0 lg:flex lg:flex-col lg:items-start lg:pb-0"
            >
              {index < consultationSteps.length - 1 && (
                <>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-6 top-12 w-px bg-slate-200 lg:hidden"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -right-6 left-12 top-6 hidden h-px bg-slate-200 lg:block"
                  />
                </>
              )}

              <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#2563EB] text-base font-bold text-white ring-4 ring-[#FAF9F6]">
                <span className="sr-only">Langkah </span>
                {step.stepNumber}
              </span>

              <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:mt-5 lg:w-full lg:flex-1 lg:p-6">
                <h3 className="break-words text-lg font-bold leading-7 tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="testimoni"
        aria-labelledby="testimoni-heading"
        aria-describedby="testimoni-disclosure"
        className="mx-auto w-full min-w-0 max-w-7xl scroll-mt-28 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8"
      >
        <div className="mb-8 max-w-3xl sm:mb-10">
          <p className="mb-4 inline-flex max-w-full items-start gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold leading-6 text-[#2563EB] sm:text-sm">
            <Info className="mt-1 size-4 shrink-0" aria-hidden="true" />
            <span className="min-w-0">Ilustrasi Dampak Kerja Sama (Mockup Preview)</span>
          </p>
          <h2
            id="testimoni-heading"
            className="text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl"
          >
            {sectionCopy.testimonials.title}
          </h2>
          <p id="testimoni-disclosure" className="mt-4 text-sm leading-7 text-slate-600">
            {testimonialDisclosure}
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3 sm:gap-5">
          {testimonials.map((testimonial, index) => {
            const isHighlighted = index === 0;

            return (
              <figure
                key={testimonial.id}
                className={`flex min-w-0 flex-col rounded-3xl border p-6 shadow-sm sm:p-7 ${
                  isHighlighted
                    ? "border-[#0F172A] bg-[#0F172A] text-white"
                    : "border-slate-200 bg-white text-[#0F172A]"
                }`}
              >
                <Quote
                  className={`mb-5 size-8 shrink-0 ${isHighlighted ? "text-emerald-300" : "text-[#2563EB]"}`}
                  aria-hidden="true"
                  strokeWidth={1.75}
                />
                <blockquote className="mb-6 flex-1 break-words text-base leading-8">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
                <figcaption
                  className={`border-t pt-5 text-sm font-semibold leading-6 ${
                    isHighlighted ? "border-white/15 text-slate-300" : "border-slate-200 text-slate-600"
                  }`}
                >
                  {testimonial.roleLabel}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ProcessAndTestimonials;
