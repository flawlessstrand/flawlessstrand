"use client"

import { useState, useEffect } from "react"

const slides = [
  {
    id: 1,
    image: "/heroslide1.jpg",
    alt: "Beautiful model with luxury straight hair wig",
  },
  {
    id: 2,
    image: "/heroslide2.jpg",
    alt: "Elegant model with body wave hair",
  },
  {
    id: 3,
    image: "/heroslide3.jpg",
    alt: "Gorgeous model with curly hair extensions",
  },
  {
    id: 4,
    image: "/heroslide4.jpg",
    alt: "Gorgeous model with curly hair extensions",
  },
  {
    id: 5,
    image: "/heroslide5.jpg",
    alt: "Gorgeous model with curly hair extensions",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
