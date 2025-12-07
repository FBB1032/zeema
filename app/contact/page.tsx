"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Have questions? We'd love to hear from you. Contact us anytime via WhatsApp or fill out the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* WhatsApp */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-3">Chat with us directly on WhatsApp for instant support</p>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    Start Chat
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground mb-3">Send us an email and we'll respond within 24 hours</p>
                  <a href="mailto:hello@zeemasstore.com" className="text-primary font-semibold hover:underline">
                    hello@zeemasstore.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-muted-foreground">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                  <div className="space-y-1 text-muted-foreground text-sm">
                    <p>Monday - Friday: 9am - 6pm</p>
                    <p>Saturday: 10am - 5pm</p>
                    <p>Sunday: 12pm - 5pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-card border border-border rounded-lg p-8">
            <h2 className="font-playfair text-2xl font-bold mb-6">Send us a Message</h2>

            {submitted ? (
              <div className="bg-primary/10 border border-primary rounded-lg p-6 text-center">
                <p className="text-lg font-semibold text-primary mb-2">Thank You!</p>
                <p className="text-muted-foreground">We've received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <section className="border-t border-border pt-12">
          <h2 className="font-playfair text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-primary">How do I place an order?</h3>
              <p className="text-muted-foreground">
                Click on any product and select "Buy via WhatsApp" to be connected to our sales team. We'll help you
                place your order and arrange payment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-primary">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept bank transfers, cards, and mobile money. Our WhatsApp team will provide you with payment
                options and details.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-primary">How long is shipping?</h3>
              <p className="text-muted-foreground">
                Shipping typically takes 2-7 business days depending on your location. We'll provide tracking
                information once your order ships.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-primary">Do you offer returns?</h3>
              <p className="text-muted-foreground">
                Yes! We offer hassle-free returns within 14 days of purchase. Items must be in original condition with
                all tags attached.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
