import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { Truck, Package, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Shipping & Delivery | flawless_strands",
  description: "Learn about our shipping and delivery options",
};

export default function ShippingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Breadcrumb />

          <h1 className="text-4xl font-serif font-bold mb-8">
            Shipping & Delivery
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-none shadow-sm">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#fee1e3] flex items-center justify-center">
                  <Globe className="h-6 w-6 text-[#2a1a1f]" />
                </div>
                <h3 className="font-semibold">Worldwide Shipping</h3>
                <p className="text-sm text-muted-foreground">
                  We deliver across the uk 
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#fee1e3] flex items-center justify-center">
                  <Truck className="h-6 w-6 text-[#2a1a1f]" />
                </div>
                <h3 className="font-semibold">Free shipping </h3>
                <p className="text-sm text-muted-foreground">
                  On orders over £50
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#fee1e3] flex items-center justify-center">
                  <Package className="h-6 w-6 text-[#2a1a1f]" />
                </div>
                <h3 className="font-semibold">Secure Packaging</h3>
                <p className="text-sm text-muted-foreground">
                  Protected and discreet delivery
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-sm max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Processing Time</h2>
              <p className="text-muted-foreground leading-relaxed">
                All orders are processed within 1-3 business days. Orders are
                not shipped or delivered on weekends or holidays. If we are
                experiencing a high volume of orders, shipments may be delayed
                by a few days. Please allow additional days in transit for
                delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Shipping Rates & Delivery Estimates
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We ship to all location. Delivery times
                vary by location:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Within the UK: 1–3 business days</li>
                <li>Europe: 7-14 business days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Shipment Confirmation & Order Tracking
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Please Note: Delivery times may vary depending on your location. Once your order is shipped, you’ll receive a tracking number to follow your package every step of the way.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Customs, Duties, and Taxes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Please note that Flawless Strands is not responsible for any customs fees, duties, or taxes that may apply to your order. Any charges incurred during or after shipping are the responsibility of the customer
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Damages</h2>
              <p className="text-muted-foreground leading-relaxed">
                Flawless Strands cannot be held liable for products that are damaged or lost in transit. If your order arrives damaged, please contact the shipping carrier to file a claim. Make sure to keep all packaging materials and damaged items until the claim is resolved.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about shipping or your order, feel free to reach out to us at flawlessstrands2025@gmail.com or via our contact page. Our team is happy to assist!
              </p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
