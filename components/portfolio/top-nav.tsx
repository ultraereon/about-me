"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { profile, navItems } from "@/lib/portfolio-data"
import logoImg from "@/public/logo.png"
import { cn } from "@/lib/utils"

export function TopNav() {
  const [active, setActive] = useState<string>("")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 md:px-12">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 outline-none"
          aria-label="Back to top"
        >
          <div className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-black">
            <Image 
              src={logoImg} 
              alt="Logo" 
              fill
              sizes="36px"
              className="object-contain"
            />
          </div>
          <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline">
            {profile.name}
          </span>
        </button>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={cn(
                      "rounded-md px-2 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-3 sm:py-2 sm:text-sm sm:tracking-widest",
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
