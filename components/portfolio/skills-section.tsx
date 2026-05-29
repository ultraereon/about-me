import { skillGroups } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { FadeIn } from "@/components/ui/fade-in"

export function SkillsSection() {
  return (
    <section id="skills" aria-label="Skills" className="scroll-mt-24">
      <FadeIn>
        <SectionHeading>Skills</SectionHeading>
      </FadeIn>
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <FadeIn key={group.label} delay={i * 150}>
            <div className="rounded-lg border border-border bg-card p-5 h-full">
              <h3 className="mb-3 text-sm font-semibold text-foreground">{group.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
