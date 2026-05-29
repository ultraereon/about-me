import { Award } from "lucide-react"
import { projects } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { FadeIn } from "@/components/ui/fade-in"

export function ProjectsSection() {
  return (
    <section id="projects" aria-label="Projects" className="scroll-mt-24">
      <FadeIn>
        <SectionHeading>Projects</SectionHeading>
      </FadeIn>
      <ul className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 150}>
            <li>
              <article className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {project.period}
                  </span>
                </div>

                {project.badge && (
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <Award className="size-3.5" aria-hidden="true" />
                    {project.badge}
                  </div>
                )}

                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{project.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          </FadeIn>
        ))}
      </ul>
    </section>
  )
}
