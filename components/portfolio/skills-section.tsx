import { skillGroups } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function SkillsSection() {
  return (
    <section id="skills" aria-label="Skills" className="scroll-mt-24">
      <SectionHeading>Skills</SectionHeading>
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label} className="rounded-lg border border-border bg-card p-5">
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
        ))}
      </div>
    </section>
  )
}
