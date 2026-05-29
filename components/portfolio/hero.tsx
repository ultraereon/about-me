import Image from "next/image"
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { profile, stats } from "@/lib/portfolio-data"

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Introduction">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-8 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-12">
        {/* Left: intro */}
        <div className="flex flex-col">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Hey there!</p>

          <h1 className="mt-4 text-balance text-4xl font-bold uppercase leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {"I'm "}
            {profile.name}
          </h1>

          <p className="mt-4 text-lg font-medium uppercase tracking-wide text-muted-foreground sm:text-xl">
            {profile.title}
          </p>

          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">{profile.tagline}</p>

          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            <span>{profile.location}</span>
          </div>

          {/* Socials */}
          <ul className="mt-6 flex items-center gap-3" aria-label="Social links">
            {[
              { href: profile.socials.github, label: "GitHub", Icon: Github },
              { href: profile.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              See My Work
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="/Mohamed-Arif-Asharf-Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Download className="size-4" aria-hidden="true" />
              Resume
            </a>
          </div>

          {/* Stats */}
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-card p-4 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-bold text-primary">{stat.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-muted-foreground">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: photo in organic blob */}
        <ClientPhoto />
      </div>
    </section>
  )
}

function ClientPhoto() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
      {/* soft glow backdrop */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-t-full bg-gradient-to-b from-primary/30 via-primary/10 to-transparent blur-2xl"
      />
      {/* gradient arch behind photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-y-3 rounded-t-full bg-gradient-to-b from-primary to-primary/30"
      />
      {/* photo clipped to arch / semi-circle */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border border-primary/30 bg-secondary">
        <Image
          src="/mohamed-arif-asharf.jpg"
          alt="Portrait of Mohamed Arif Asharf"
          fill
          sizes="(max-width: 1024px) 24rem, 28rem"
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  )
}
