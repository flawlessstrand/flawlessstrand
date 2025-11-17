import { notFound } from 'next/navigation'
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductDetails } from "@/components/product-details"
import { getProduct } from "@/lib/shopify"
import { Breadcrumb } from "@/components/breadcrumb"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>
}) {
  const { handle } = await params
  const product = await getProduct(handle)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.title} | Flawless Strands`,
    description: product.description || `Shop ${product.title}`,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>
}) {
  const { handle } = await params
  console.log("[v0] Product page loading for handle:", handle)
  const product = await getProduct(handle)
  console.log("[v0] Product found:", product ? product.title : "null")

  if (!product) {
    console.log("[v0] Product not found, returning 404 for handle:", handle)
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <Breadcrumb />
          <ProductDetails product={product} />
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
