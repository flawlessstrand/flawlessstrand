import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductGrid } from "@/components/product-grid";
import { Breadcrumb } from "@/components/breadcrumb";
import { getProducts } from "@/lib/shopify";

export const metadata = {
  title: "Shop All Products | flawless_strands",
  description:
    "Browse our complete collection of premium wigs and hair extensions",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = typeof searchParams.q === "string" ? searchParams.q : undefined;

  // Fetch products from Shopify
  const products = await getProducts({ first: 100, query });

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <Breadcrumb />

          <div className="space-y-4 mb-8">
            <h1 className="text-4xl font-serif font-bold text-balance">
              Shop All Products
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Discover our complete collection of premium hair products
            </p>
          </div>

          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductGrid products={products} />
          </Suspense>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="space-y-4">
          <div className="aspect-square bg-muted animate-pulse rounded-lg" />
          <div className="space-y-2">
            <div className="h-4 bg-muted animate-pulse rounded" />
            <div className="h-4 bg-muted animate-pulse rounded w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
}
