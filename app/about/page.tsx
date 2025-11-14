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
                About Flawless Strands
              </h1>
              <p className="text-lg text-[#2a1a1f]/80 max-w-2xl mx-auto leading-relaxed">
                Our journey began with a simple love for braids and a personal struggle: finding high-quality, ethically sourced hair products that truly met our standards. Frustrated by the limited options, our founder decided to create Flawless Strands—a brand that sets a new standard in the industry.
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
                Our journey began with a simple love for braids and a personal struggle: finding high-quality, ethically sourced hair products that truly met our standards. Frustrated by the limited options, our founder decided to create Flawless Strands—a brand that sets a new standard in the industry.
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
                    We provide soft, tangle-free braiding hair extensions that meet the highest standards, ensuring every style looks and feels flawless.
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
                    We are committed to sourcing our products responsibly, so you can enjoy beautiful hair with a clear conscience.
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
                    Your satisfaction is our priority—our team is here to support you every step of the way, making your experience seamless and enjoyable.
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
                At Flawless Strands, we believe every woman deserves to feel confident, beautiful, and empowered. That’s why we are dedicated to delivering more than just hair extensions—we provide an experience designed to inspire and delight.
              </p>
              <p>
              We carefully craft and select each product to meet our high standards for softness, bounce, and natural movement, ensuring every style looks flawless. Our team continuously strives to bring the latest in quality and innovation, so you can enjoy hair that’s as versatile and unique as you are
              </p>
              <p>
                Thank you for choosing Flawless Strands. We’re proud to be part of your hair journey and are committed to supporting you every step of the way.
              </p>
            </div>
          </div>
        </section>
      </main>
    
      <SiteFooter />
    </div>
  );
}
