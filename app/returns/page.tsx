import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { RefreshCw, CheckCircle, AlertCircle } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Return & Exchange Policy | LuxeHair",
  description: "Learn about our return and exchange policy for Flawless Strands",
}

export default function ReturnsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          <Breadcrumb />

          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 md:mb-8">Return & Exchange Policy</h1>

          <Card className="mb-8 md:mb-12 bg-[#fee1e3]/30 border-none">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2a1a1f] flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">We Want You To Love Your Purchase</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    We want you to love your purchase from Flawless Strands. For hygiene and safety reasons, we do not accept returns or exchanges on hair products once the packaging has been opened.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="prose prose-sm max-w-none space-y-6 md:space-y-8">
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Unopened Items</h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                If your item is still in its original, unopened packaging, you may request a return or exchange within 14 days of receiving your order. The item must be unused and in its original condition.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Incorrect or Faulty Items</h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
                If you receive the wrong item or a product that appears faulty, please contact us within 48 hours of delivery. Our team will be happy to assist and arrange a suitable solution.
              </p>
              <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg border border-amber-200">
                <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-amber-900 text-sm">
                  <strong>Important:</strong> Contact us within 48 hours of delivery for incorrect or faulty items.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Return Shipping</h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Customers are responsible for return shipping costs unless the return is due to an error on our end.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">How to Request a Return</h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
                Contact us at <a href="mailto:flawlessstrands2025@gmail.com" className="text-[#c19a6b] hover:underline font-medium">flawlessstrands2025@gmail.com</a> or via our <a href="/contact" className="text-[#c19a6b] hover:underline font-medium">contact page</a> with your order number and details of your request. Our team will guide you through the process.
              </p>
              
              <div className="space-y-3 mt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm md:text-base">
                    Include your order number in your email
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm md:text-base">
                    Provide details about your return or exchange request
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm md:text-base">
                    Our team will respond and guide you through the process
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-[#fee1e3]/20 p-6 rounded-lg border border-[#fee1e3]">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Questions?</h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                If you have any questions about our return policy, please don't hesitate to contact us at{" "}
                <a href="mailto:flawlessstrands2025@gmail.com" className="text-[#c19a6b] hover:underline font-medium">
                  flawlessstrands2025@gmail.com
                </a>{" "}
                or through our <a href="/contact" className="text-[#c19a6b] hover:underline font-medium">contact page</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
