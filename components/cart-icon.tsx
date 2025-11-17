"use client"

import Link from "next/link"
import { ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface CartIconProps {
  itemCount?: number
}

export function CartIcon({ itemCount = 0 }: CartIconProps) {
  return (
    <Button variant="ghost" size="icon" asChild className="relative">
      <Link href="/cart">
        <ShoppingBag className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            {itemCount > 99 ? "99+" : itemCount}
          </span>
        )}
        <span className="sr-only">Shopping cart ({itemCount} items)</span>
      </Link>
    </Button>
  )
}
