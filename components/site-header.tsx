"use client"

import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { CartIcon } from "@/components/cart-icon"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartItemCount, setCartItemCount] = useState(0)

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const response = await fetch("/api/cart/count")
        const data = await response.json()
        setCartItemCount(data.count || 0)
      } catch (error) {
        console.error("Failed to fetch cart count:", error)
      }
    }

    fetchCartCount()

    // Listen for cart updates
    const handleCartUpdate = () => {
      fetchCartCount()
    }

    window.addEventListener("cartUpdated", handleCartUpdate)
    return () => window.removeEventListener("cartUpdated", handleCartUpdate)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-serif font-bold text-foreground">LuxeHair</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/shop" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Shop
          </Link>
          <Link
            href="/hair-care"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Hair Care
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Cart & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <CartIcon itemCount={cartItemCount} />

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto flex flex-col space-y-4 px-4 py-6">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/hair-care"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hair Care
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
