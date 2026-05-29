import { about } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function AboutSection() {
  return (
    <section id="about" aria-label="About me" className="scroll-mt-24">
      <SectionHeading>About</SectionHeading>
      <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
        {about.map((paragraph, i) => (
          <p key={i} className="text-pretty">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
