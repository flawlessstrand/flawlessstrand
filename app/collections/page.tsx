import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { getCollections } from "@/lib/shopify";

export const metadata = {
  title: "Collections | flawless_strands",
  description: "Browse our curated collections of premium hair products",
};

export default async function CollectionsPage() {
  const collections = await getCollections();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <Breadcrumb />

          <div className="space-y-4 mb-12 text-center">
            <h1 className="text-4xl font-serif font-bold text-balance">
              Our Collections
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our carefully curated collections, each designed to help
              you find the perfect style
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.handle}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={
                      collection.image?.url ||
                      "/placeholder.svg?height=400&width=600"
                    }
                    alt={collection.image?.altText || collection.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                    <h2 className="text-2xl font-serif font-bold text-white">
                      {collection.title}
                    </h2>
                    {collection.description && (
                      <p className="text-sm text-white/90 line-clamp-2">
                        {collection.description}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
