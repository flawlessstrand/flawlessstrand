import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductGrid } from "@/components/product-grid";
import { getCollection } from "@/lib/shopify";

export async function generateMetadata({
  params,
}: {
  params: { handle: string };
}) {
  const collection = await getCollection(params.handle);

  if (!collection) {
    return {
      title: "Collection Not Found",
    };
  }

  return {
    title: `${collection.title} | flawless_strands`,
    description:
      collection.description || `Shop ${collection.title} collection`,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: { handle: string };
}) {
  const collection = await getCollection(params.handle);

  if (!collection) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Collection Header */}
        {collection.image && (
          <div
            className="relative h-[300px] overflow-hidden"
            style={{ backgroundColor: "#fee1e3" }}
          >
            <img
              src={collection.image.url || "/placeholder.svg"}
              alt={collection.image.altText || collection.title}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4 px-4">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2a1a1f] text-balance">
                  {collection.title}
                </h1>
                {collection.description && (
                  <p className="text-lg text-[#2a1a1f]/80 max-w-2xl mx-auto leading-relaxed">
                    {collection.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="container mx-auto px-4 py-12">
          {!collection.image && (
            <div className="space-y-4 mb-8">
              <h1 className="text-4xl font-serif font-bold text-balance">
                {collection.title}
              </h1>
              {collection.description && (
                <p className="text-muted-foreground leading-relaxed">
                  {collection.description}
                </p>
              )}
            </div>
          )}

          <ProductGrid products={collection.products} />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
