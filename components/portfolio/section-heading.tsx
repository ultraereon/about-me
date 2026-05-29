import type { ReactNode } from "react"

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className="sticky top-0 z-10 -mx-6 mb-6 bg-background/80 px-6 py-4 backdrop-blur lg:static lg:mx-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
      <h2 className="text-xs font-bold uppercase tracking-widest text-foreground lg:hidden">{children}</h2>
      <h2 className="hidden text-xl font-bold tracking-tight text-foreground lg:block">{children}</h2>
    </div>
  )
}
