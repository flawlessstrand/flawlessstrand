import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata = {
  title: "Terms & Conditions | flawless_strands",
  description: "Read our terms and conditions",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Breadcrumb />

          <h1 className="text-4xl font-serif font-bold mb-8">
            Terms & Conditions
          </h1>

          <div className="prose prose-sm max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using flawless_strands's website and services,
                you agree to be bound by these Terms and Conditions. If you do
                not agree with any part of these terms, please do not use our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Products and Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All products sold on flawless_strands are 100% virgin human hair
                products. We reserve the right to modify product descriptions,
                pricing, and availability at any time without prior notice.
                Product images are for illustration purposes and actual products
                may vary slightly in color and texture.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Pricing and Payment
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All prices are listed in USD unless otherwise stated. We accept
                major credit cards and other payment methods as displayed at
                checkout. Payment must be received in full before orders are
                processed and shipped.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Order Processing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Orders are typically processed within 1-3 business days. You
                will receive a confirmation email once your order has been
                placed and another email when your order has shipped with
                tracking information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, images, logos, and
                designs, are the property of flawless_strands and are protected
                by copyright and trademark laws. Unauthorized use is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                flawless_strands shall not be liable for any indirect,
                incidental, or consequential damages arising from the use of our
                products or services. Our liability is limited to the purchase
                price of the product.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update these Terms and Conditions at any
                time. Changes will be effective immediately upon posting to the
                website. Your continued use of our services constitutes
                acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms and Conditions,
                please contact us through our contact page or email us at
                support@flawless_strands.com.
              </p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
