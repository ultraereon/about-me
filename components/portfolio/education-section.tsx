import { education, certifications } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function EducationSection() {
  return (
    <section id="education" aria-label="Education and certifications" className="scroll-mt-24">
      <SectionHeading>Education</SectionHeading>

      <ol className="flex flex-col gap-6">
        {education.map((item) => (
          <li
            key={item.degree}
            className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-6"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:pt-1">
              {item.year}
            </span>
            <div>
              <h3 className="font-semibold text-foreground">{item.degree}</h3>
              <p className="text-sm text-muted-foreground">{item.school}</p>
              <p className="text-sm text-muted-foreground">
                {item.board} · {item.location}
              </p>
              {item.score && <p className="mt-1 text-sm font-medium text-primary">{item.score}</p>}
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mb-4 mt-12 text-sm font-bold uppercase tracking-widest text-foreground">Certifications</h3>
      <ul className="flex flex-col gap-3">
        {certifications.map((cert) => (
          <li
            key={cert.title}
            className="rounded-lg border border-border bg-card p-4"
          >
            <p className="font-medium text-foreground">{cert.title}</p>
            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
