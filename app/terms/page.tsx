import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-playfair text-4xl font-bold mb-8">Terms & Conditions</h1>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Zeema Store website and services, you accept and agree to be bound by the terms
              and provision of this agreement. If you do not agree to abide by the above, please do not use this
              service.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Zeema
              Store's website for personal, non-commercial transitory viewing only. This is the grant of a license, not
              a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">3. Disclaimer</h2>
            <p>
              The materials on Zeema Store's website are provided as-is. Zeema Store makes no warranties, expressed or
              implied, and hereby disclaims and negates all other warranties including, without limitation, implied
              warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">4. Limitations</h2>
            <p>
              In no event shall Zeema Store or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on Zeema Store's website, even if we or an authorized representative has been
              notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Zeema Store's website could include technical, typographical, or photographic
              errors. Zeema Store does not warrant that any of the materials on the website are accurate, complete, or
              current. Zeema Store may make changes to the materials contained on its website at any time without
              notice.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">6. Product Information</h2>
            <p>
              All product descriptions, images, and specifications on our website are provided for informational
              purposes only. While we strive to provide accurate information, we do not warrant the accuracy,
              completeness, or reliability of product descriptions or images.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">7. Pricing and Availability</h2>
            <p>
              Prices are subject to change without notice. We reserve the right to limit quantities and discontinue any
              product at any time. All products are subject to availability. If a product is unavailable, we will inform
              you via WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">8. Orders and Payments</h2>
            <p>
              All orders are placed through WhatsApp communication with our sales team. Payment methods and terms will
              be confirmed during the ordering process. We accept bank transfers, cards, and mobile money. All payments
              must be completed before products are dispatched.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">9. Returns and Refunds</h2>
            <p>
              We offer hassle-free returns within 14 days of purchase. Products must be in original condition with all
              tags and packaging intact. Once we receive and inspect your returned item, we will process your refund.
              Refunds will be issued in the original payment method within 5-7 business days.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">10. Modifications</h2>
            <p>
              Zeema Store may revise these terms of service at any time without notice. By using this website, you are
              agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">11. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Nigeria, and you
              irrevocably submit to the exclusive jurisdiction of the courts located in Lagos, Nigeria.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">12. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us via WhatsApp or email at
              hello@zeemasstore.com
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
