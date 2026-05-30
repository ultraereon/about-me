import { TopNav } from "@/components/portfolio/top-nav"
import { Hero } from "@/components/portfolio/hero"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { profile } from "@/lib/portfolio-data"

export default function Page() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <Hero />

      <main className="mx-auto flex max-w-3xl flex-col gap-20 px-4 pb-24 sm:px-6 md:px-12" id="content">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />

        <footer className="border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
          <p>
            Designed and built with Next.js and Tailwind CSS. Get in touch at{" "}
            <a
              href={`mailto:${profile.email}`}
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              {profile.email}
            </a>{" "}
            or call{" "}
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              {profile.phone}
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  )
}
