"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "Zeema Store transformed the way I think about beauty. Every product feels like a luxury experience.",
    author: "Sarah M.",
    role: "Beauty Enthusiast",
  },
  {
    id: 2,
    quote:
      "The curated collections are exceptional. I love how each item tells a story of elegance and sophistication.",
    author: "Amira K.",
    role: "Fashion Designer",
  },
  {
    id: 3,
    quote: "Shopping with Zeema feels personal and luxurious. The WhatsApp experience is seamless and delightful.",
    author: "Nina P.",
    role: "Style Consultant",
  },
  {
    id: 4,
    quote: "Finally, a space dedicated to celebrating women's beauty and style. Zeema understands luxury.",
    author: "Leila R.",
    role: "Brand Curator",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const testimonial = testimonials[current]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            What Women <span className="text-primary">Love About Us</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="bg-card border border-border rounded-lg p-8 md:p-12 relative min-h-64 flex flex-col justify-center">
          {/* Quote */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl font-playfair italic text-foreground mb-6">"{testimonial.quote}"</p>
            <div>
              <p className="font-semibold text-lg text-primary">{testimonial.author}</p>
              <p className="text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrent(idx)
                    setAutoPlay(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === current ? "bg-primary w-6" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
