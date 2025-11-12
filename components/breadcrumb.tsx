import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface BreadcrumbProps {
  items?: { label: string; href: string }[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-6">
      <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
        <ChevronLeft className="h-4 w-4 mr-1" />
        <span>Home</span>
      </Link>
      {items?.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span className="text-muted-foreground">/</span>
          <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  )
}
