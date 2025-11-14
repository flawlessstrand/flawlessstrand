import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRight } from "lucide-react";
import { getCollections, getProducts } from "@/lib/shopify";
import { ProductCard } from "@/components/product-card";
import { HeroSlider } from "@/components/hero-slider"


export default async function HomePage() {
  const collections = await getCollections();
  const products = await getProducts({ first: 4 });

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[400px] md:min-h-[500px]">
          <HeroSlider />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />

          <div className="container mx-auto px-4 py-6 md:py-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="space-y-4 text-left">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white text-balance leading-snug md:leading-tight drop-shadow-lg">
                  Unveil Your Signature Look with Our Premium Hair Wigs
                </h1>
                <p className="text-xs md:text-base text-white/90 leading-relaxed text-pretty max-w-xl drop-shadow-md">
                  Flawless Hair. Effortless Style.
Soft, bouncy, and tangle-free braiding hair extensions designed to let your confidence shine.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    asChild
                    className="bg-white text-[#2a1a1f] hover:bg-white/90"
                  >
                    <Link href="/shop">Shop Now</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <Link href="/collections">Our Work</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[450px] hidden lg:block">
                {/* Optional: Keep image as fallback or remove */}
              </div>
            </div>
          </div>
        </section>

        {/* Seller Recommended */}
        <section className="py-8 bg-[#fee1e3]">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-balance">
                Seller Recommended
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our top picks, just for you. Premium, tangle-free braiding hair extensions loved by hair lovers everywhere.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {/* Large featured image */}
              <div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg group cursor-pointer">
                <img
                  src="replacement.jpg"
                  alt="Featured hair style showcase"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Smaller gallery images */}
              <div className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square">
                <img
                  src="/model2.jpg"
                  alt="Hair style showcase"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square">
                <img
                  src="/model3.jpg"
                  alt="Hair style showcase"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square">
                <img
                  src="/model4.jpg"
                  alt="Hair style showcase"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square">
                <img
                  src="/model5.jpg"
                  alt="Hair style showcase"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="text-center mt-6">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-[#2a1a1f] text-[#2a1a1f] hover:bg-[#2a1a1f] hover:text-white bg-transparent"
              >
                <Link href="/shop">View All Styles</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Get your Hair */}
        <section className="py-0 bg-background">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Text content */}
            <div className="bg-[#fee1e3] p-6 md:p-8 lg:p-10 flex items-center">
              <div className="space-y-4 max-w-xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-balance">
                  Get your Hair
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  Your perfect hair awaits! Explore our range of soft, lightweight, and tangle-free braiding extensions designed to bring bounce, shine, and effortless style to every look. Whether you’re creating everyday braids, bold protective styles, or statement twists, our collection makes styling simple, fun, and flawless. Find the hair that inspires your confidence and completes your signature style.
                  States.
                </p>
                <Button
                  size="lg"
                  className="bg-[#c9a896] hover:bg-[#b89685] text-white"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>

            {/* Right side - Model image */}
            <div className="relative min-h-[300px] lg:min-h-[600px]">
              <img
                src="/standalone.jpg"
                alt="Beautiful model with luxurious curly hair"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Collections Preview */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-balance">
                Our Collections
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Discover Our collection 
Each piece is designed to complement your unique style and let your confidence shine.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {collections.slice(0, 4).map((collection) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.handle}`}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div className="aspect-[3/4] relative">
                    <img
                      src={
                        collection.image?.url ||
                        "/placeholder.svg?height=400&width=400"
                      }
                      alt={collection.image?.altText || collection.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                      <h3 className="text-sm md:text-xl font-semibold text-white">
                        {collection.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button size="lg" variant="outline" asChild>
                <Link href="/collections">
                  View All Collections
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-balance">
                Featured Products
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Handpicked favorites loved by our customers. Premium quality
                meets timeless elegance.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                size="lg"
                asChild
                className="bg-[#2a1a1f] hover:bg-[#2a1a1f]/90"
              >
                <Link href="/shop">
                  Shop All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12" style={{ backgroundColor: "#faf8f7" }}>
          <div className="container mx-auto px-4 text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-balance">
              Ready to Transform Your Look?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust flawless_strands
              for their hair needs.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-[#2a1a1f] hover:bg-[#2a1a1f]/90"
            >
              <Link href="/shop">
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
