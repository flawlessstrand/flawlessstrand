'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function SalePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenSalePopup')
    
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem('hasSeenSalePopup', 'true')
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 animate-in fade-in">
      <div className="relative bg-gradient-to-br from-red-600 via-pink-600 to-red-700 rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Content */}
        <div className="text-center space-y-6">
          {/* Header */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              BLACK FRIDAY JUST DROPPED!
            </h2>
            
            {/* Offers */}
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-white font-semibold flex items-center justify-center gap-2">
                <span className="text-yellow-300">✨</span>
                Up to 60% OFF
                <span className="text-yellow-300">✨</span>
              </p>
              
              <p className="text-lg md:text-xl text-white/95 font-medium flex items-center justify-center gap-2">
                <span className="text-yellow-300">✨</span>
                Prices from £4.99
                <span className="text-yellow-300">✨</span>
              </p>
              
              <p className="text-base md:text-lg text-white/90 flex items-center justify-center gap-2">
                <span className="text-yellow-300">✨</span>
                Free Delivery over £50
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            asChild
            className="w-full bg-white text-red-600 hover:bg-gray-100 font-bold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/shop" onClick={() => setIsOpen(false)}>
              Tap to shop the sale →
            </Link>
          </Button>

          {/* Fine print */}
          <p className="text-xs text-white/70">
            Limited time only. While stocks last.
          </p>
        </div>
      </div>
    </div>
  )
}
