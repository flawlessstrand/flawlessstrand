"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingBag, Check } from "lucide-react"
import type { Product } from "@/lib/shopify/types"
import { addToCart } from "@/lib/shopify/cart"
import { useRouter } from "next/navigation"

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const router = useRouter()
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [selectedImage, setSelectedImage] = useState(product.images[0])
  const [isAdding, setIsAdding] = useState(false)

  // Group variants by option (e.g., Color, Size)
  const options = product.options.filter((option) => option.values.length > 1)

  const handleAddToCart = async () => {
    if (!selectedVariant) return

    setIsAdding(true)
    try {
      await addToCart(selectedVariant.id, 1)
      window.dispatchEvent(new Event("cartUpdated"))

      // Redirect to cart or show success message
      router.push("/cart")
    } catch (error) {
      console.error("Failed to add to cart:", error)
    } finally {
      setIsAdding(false)
    }
  }

  const handleOptionChange = (optionName: string, value: string) => {
    // Find variant that matches the selected options
    const newVariant = product.variants.find((variant) => {
      return variant.selectedOptions.some((opt) => opt.name === optionName && opt.value === value)
    })

    if (newVariant) {
      setSelectedVariant(newVariant)
      // Update image if variant has one
      if (newVariant.image) {
        setSelectedImage(newVariant.image)
      }
    }
  }

  const price = selectedVariant.price
  const compareAtPrice = selectedVariant.compareAtPrice

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Product Images */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="aspect-square relative overflow-hidden rounded-lg bg-muted">
          <img
            src={selectedImage?.url || "/placeholder.svg?height=600&width=600"}
            alt={selectedImage?.altText || product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnail Images */}
        {product.images.length > 1 && (
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`aspect-square relative overflow-hidden rounded-lg border-2 transition-colors ${
                  selectedImage?.url === image.url
                    ? "border-[#2a1a1f]"
                    : "border-transparent hover:border-muted-foreground/50"
                }`}
              >
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={image.altText || `${product.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-balance">{product.title}</h1>
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold">
              £{Number.parseFloat(price.amount).toFixed(2)} {price.currencyCode}
            </span>
            {compareAtPrice && Number.parseFloat(compareAtPrice.amount) > Number.parseFloat(price.amount) && (
              <span className="text-lg text-muted-foreground line-through">
                £{Number.parseFloat(compareAtPrice.amount).toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Product Description */}
        {product.description && (
<div
  className="prose prose-sm max-w-none"
  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
/>

        )}

        {/* Variant Options */}
        {options.map((option) => (
          <div key={option.name} className="space-y-3">
            <label className="text-sm font-semibold">
              {option.name}:{" "}
              <span className="font-normal text-muted-foreground">
                {selectedVariant.selectedOptions.find((opt) => opt.name === option.name)?.value}
              </span>
            </label>

            {/* Color swatches for Color option */}
            {option.name.toLowerCase() === "color" ? (
              <div className="flex flex-wrap gap-3">
                {option.values.map((value) => {
                  const isSelected = selectedVariant.selectedOptions.some(
                    (opt) => opt.name === option.name && opt.value === value,
                  )
                  return (
                    <button
                      key={value}
                      onClick={() => handleOptionChange(option.name, value)}
                      className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                        isSelected ? "border-[#2a1a1f] scale-110" : "border-muted hover:border-muted-foreground"
                      }`}
                      style={{
                        backgroundColor: value.toLowerCase().replace(/\s+/g, ""),
                      }}
                      title={value}
                    >
                      {isSelected && <Check className="absolute inset-0 m-auto h-5 w-5 text-white drop-shadow-lg" />}
                      <span className="sr-only">{value}</span>
                    </button>
                  )
                })}
              </div>
            ) : (
              /* Regular buttons for other options */
              <div className="flex flex-wrap gap-2">
                {option.values.map((value) => {
                  const isSelected = selectedVariant.selectedOptions.some(
                    (opt) => opt.name === option.name && opt.value === value,
                  )
                  return (
                    <Button
                      key={value}
                      variant={isSelected ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleOptionChange(option.name, value)}
                      className={isSelected ? "bg-[#2a1a1f] hover:bg-[#2a1a1f]/90" : ""}
                    >
                      {value}
                    </Button>
                  )
                })}
              </div>
            )}
          </div>
        ))}

        {/* Availability */}
        <div className="flex items-center gap-2">
          {selectedVariant.availableForSale ? (
            <>
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm text-muted-foreground">In Stock</span>
            </>
          ) : (
            <>
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-sm text-muted-foreground">Out of Stock</span>
            </>
          )}
        </div>

        {/* Add to Cart */}
        <Button
          size="lg"
          className="w-full bg-[#2a1a1f] hover:bg-[#2a1a1f]/90"
          onClick={handleAddToCart}
          disabled={!selectedVariant.availableForSale || isAdding}
        >
          <ShoppingBag className="mr-2 h-5 w-5" />
          {isAdding ? "Adding..." : "Add to Cart"}
        </Button>

        {/* Product Features */}
        <Card className="p-6 bg-muted/30 border-none">
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-[#2a1a1f] flex-shrink-0 mt-0.5" />
              <span>14-day return policy</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-[#2a1a1f] flex-shrink-0 mt-0.5" />
              <span>Secure payment processing</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
