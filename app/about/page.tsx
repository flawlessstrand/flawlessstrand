import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { Heart, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "About Us | flawless_strands",
  description: "Learn about flawless_strands and our commitment to quality",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20" style={{ backgroundColor: "#fee1e3" }}>
          <div className="container mx-auto px-4">
            <Breadcrumb />

            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2a1a1f] mb-6 text-balance">
                About flawless_strands
              </h1>
              <p className="text-lg text-[#2a1a1f]/80 max-w-2xl mx-auto leading-relaxed">
                Empowering women with premium quality hair products since 2020
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-sm max-w-none space-y-6">
              <h2 className="text-3xl font-serif font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                flawless_strands was founded with a simple mission: to provide
                women with access to premium quality hair extensions and wigs
                that make them feel confident and beautiful. We understand that
                your hair is an expression of your identity, and we're committed
                to helping you achieve the look you've always wanted.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our journey began when our founder struggled to find
                high-quality, ethically sourced hair products that met her
                standards. Frustrated by the lack of options, she decided to
                create a brand that would set a new standard in the industry.
                Today, flawless_strands is trusted by thousands of women
                worldwide who value quality, authenticity, and exceptional
                customer service.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-none shadow-sm">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#fee1e3] flex items-center justify-center">
                    <Award className="h-8 w-8 text-[#2a1a1f]" />
                  </div>
                  <h3 className="text-xl font-semibold">Quality First</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We source only the finest 100% virgin human hair, ensuring
                    every product meets our rigorous quality standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#fee1e3] flex items-center justify-center">
                    <Heart className="h-8 w-8 text-[#2a1a1f]" />
                  </div>
                  <h3 className="text-xl font-semibold">Ethical Sourcing</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We're committed to ethical practices, ensuring our hair is
                    sourced responsibly and our suppliers are treated fairly.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#fee1e3] flex items-center justify-center">
                    <Users className="h-8 w-8 text-[#2a1a1f]" />
                  </div>
                  <h3 className="text-xl font-semibold">Customer Care</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your satisfaction is our priority. We provide exceptional
                    support and stand behind every product we sell.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Our Commitment
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At flawless_strands, we believe that every woman deserves to
                feel beautiful and confident. That's why we're committed to
                providing not just products, but an experience that exceeds your
                expectations.
              </p>
              <p>
                We continuously invest in research and development to bring you
                the latest innovations in hair technology. Our team of experts
                carefully selects and tests every product to ensure it meets our
                high standards for quality, durability, and natural appearance.
              </p>
              <p>
                Thank you for choosing flawless_strands. We're honored to be
                part of your beauty journey and look forward to serving you for
                years to come.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
