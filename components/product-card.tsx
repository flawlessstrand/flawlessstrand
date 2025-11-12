import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/shopify/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const price = product.priceRange.minVariantPrice
  const image = product.images[0]

  return (
    <Card className="group overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <Link href={`/products/${product.handle}`}>
          <div className="aspect-[3/4] relative overflow-hidden">
            <img
              src={image?.url || "/placeholder.svg?height=400&width=400"}
              alt={image?.altText || product.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
        <div className="p-2 md:p-4 space-y-1 md:space-y-2">
          <Link href={`/products/${product.handle}`}>
            <h3 className="font-medium text-xs md:text-sm hover:underline line-clamp-2">{product.title}</h3>
          </Link>
          <p className="text-sm md:text-lg font-semibold">
            ${Number.parseFloat(price.amount).toFixed(2)} {price.currencyCode}
          </p>
          <Button className="w-full bg-transparent text-xs md:text-sm" size="sm" variant="outline" asChild>
            <Link href={`/products/${product.handle}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
