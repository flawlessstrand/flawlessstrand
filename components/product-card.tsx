import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/shopify/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const price = product.priceRange.minVariantPrice
  const image = product.images[0]

    const compareAtPrice = product.variants?.[0]?.compareAtPrice
  const hasDiscount = compareAtPrice && Number.parseFloat(compareAtPrice.amount) > Number.parseFloat(price.amount)
  
  // Calculate discount percentage if on sale
  const discountPercentage = hasDiscount 
    ? Math.round(((Number.parseFloat(compareAtPrice.amount) - Number.parseFloat(price.amount)) / Number.parseFloat(compareAtPrice.amount)) * 100)
    : 0

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
              {hasDiscount && (
              <Badge className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white font-semibold">
                SALE {discountPercentage}% OFF
              </Badge>
            )}
          </div>
        </Link>
         <div className="p-2 md:p-4 space-y-1 md:space-y-2">
          <Link href={`/products/${product.handle}`}>
            <h3 className="font-medium text-xs md:text-sm hover:underline line-clamp-2">{product.title}</h3>
          </Link>
          <div className="flex items-center gap-2">
            <p className="text-sm md:text-lg font-semibold text-red-600">
              £{Number.parseFloat(price.amount).toFixed(2)}
            </p>
            {hasDiscount && (
              <p className="text-xs md:text-sm text-muted-foreground line-through">
                £{Number.parseFloat(compareAtPrice.amount).toFixed(2)}
              </p>
            )}
          </div>
          <Button className="w-full bg-transparent text-xs md:text-sm" size="sm" variant="outline" asChild>
            <Link href={`/products/${product.handle}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
