import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { RefreshCw, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Returns & Exchanges | flawless_strands",
  description: "Learn about our return and exchange policy",
};

export default function ReturnsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Breadcrumb />

          <h1 className="text-4xl font-serif font-bold mb-8">
            Returns & Exchanges
          </h1>

          <Card className="mb-12 bg-[#fee1e3]/30 border-none">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2a1a1f] flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    30-Day Return Policy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We want you to be completely satisfied with your purchase.
                    If you're not happy with your order, you can return it
                    within 30 days of delivery for a full refund or exchange.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="prose prose-sm max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Return Eligibility
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To be eligible for a return, your item must meet the following
                conditions:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Item must be unused and in the same condition that you
                    received it
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Item must be in the original packaging
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Return must be initiated within 30 days of delivery
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    You must provide proof of purchase
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Non-Returnable Items
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The following items cannot be returned:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Items that have been worn, washed, or altered
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Items without original packaging or tags
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Custom or personalized items
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Sale or clearance items
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                How to Return an Item
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                <li>
                  Contact our customer service team at
                  returns@flawless_strands.com with your order number
                </li>
                <li>
                  We will provide you with a return authorization number and
                  shipping instructions
                </li>
                <li>Pack the item securely in its original packaging</li>
                <li>
                  Ship the item to the address provided (you are responsible for
                  return shipping costs)
                </li>
                <li>
                  Once we receive and inspect your return, we will process your
                  refund
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Once your return is received and inspected, we will send you an
                email to notify you that we have received your returned item. We
                will also notify you of the approval or rejection of your
                refund. If approved, your refund will be processed within 5-10
                business days and a credit will automatically be applied to your
                original method of payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
              <p className="text-muted-foreground leading-relaxed">
                We only replace items if they are defective or damaged. If you
                need to exchange an item for the same product, contact us at
                exchanges@flawless_strands.com with your order number and
                details about the issue.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Shipping Costs</h2>
              <p className="text-muted-foreground leading-relaxed">
                You will be responsible for paying for your own shipping costs
                for returning your item. Shipping costs are non-refundable. If
                you receive a refund, the cost of return shipping will be
                deducted from your refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our return policy, please
                contact us at support@flawless_strands.com or through our
                contact page.
              </p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
