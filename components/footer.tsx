"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-primary mb-4">Zeema</h3>
            <p className="text-muted-foreground">Luxury beauty and fashion for the modern woman.</p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/children" className="text-muted-foreground hover:text-primary transition-colors">
                  Children
                </Link>
              </li>
              <li>
                <Link href="/adult" className="text-muted-foreground hover:text-primary transition-colors">
                  Adult
                </Link>
              </li>
              <li>
                <Link href="/perfume" className="text-muted-foreground hover:text-primary transition-colors">
                  Perfume
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-muted-foreground hover:text-primary transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Admin & Social */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Admin & Social</h4>
            <ul className="space-y-2 mb-4">
              <li>
                <Link href="/admin/login" className="text-muted-foreground hover:text-primary transition-colors">
                  Admin Login
                </Link>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
            <p>&copy; {currentYear} Zeema Store. All rights reserved.</p>
            <p>Crafted with luxury in mind for the modern woman.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
