import { about } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { FadeIn } from "@/components/ui/fade-in"

export function AboutSection() {
  return (
    <section id="about" aria-label="About me" className="scroll-mt-24">
      <FadeIn>
        <SectionHeading>About</SectionHeading>
      </FadeIn>
      <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
        {about.map((paragraph, i) => (
          <FadeIn key={i} delay={150 + i * 150}>
            <p className="text-pretty">
              {paragraph}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
