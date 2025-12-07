import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-playfair text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">1. Introduction</h2>
            <p>
              Zeema Store ("we" or "us" or "our") operates the website. This page informs you of our policies regarding
              the collection, use, and disclosure of personal data when you use our website and the choices you have
              associated with that data.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">2. Information Collection and Use</h2>
            <p>We collect different types of information for various purposes to provide and improve our service:</p>
            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
              <li>Personal Information: Name, email address, phone number, postal address</li>
              <li>Order Information: Products purchased, delivery address, payment method</li>
              <li>Usage Data: Pages visited, time spent on pages, IP address, browser type</li>
              <li>Communication Data: Messages sent via WhatsApp or email</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">3. Use of Data</h2>
            <p>Zeema Store uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer care and support</li>
              <li>To gather analysis or valuable information so we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">4. Security of Data</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the
              Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
              means to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">5. Third-Party Services</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for the privacy practices or
              content of these external sites. We encourage you to review the privacy policies of any third-party
              services before providing your information.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">6. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "effective date" at the bottom of this page.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us via WhatsApp or email at
              hello@zeemasstore.com
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-border text-sm">
            <p>Last updated: December 2025</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
