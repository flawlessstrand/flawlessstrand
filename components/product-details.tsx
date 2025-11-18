"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingBag, Check, AlertTriangle } from 'lucide-react'
import type { Product } from "@/lib/shopify/types"
import { addToCart } from "@/lib/shopify/cart"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"


interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const router = useRouter()
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const mediaItems = product.media && product.media.length > 0 ? product.media : product.images.map(img => ({ type: 'image' as const, url: img.url, altText: img.altText }))
  const [selectedMedia, setSelectedMedia] = useState(mediaItems[0])
  const [selectedImage, setSelectedImage] = useState(product.images[0])
  const [isAdding, setIsAdding] = useState(false)
  const [quantity, setQuantity] = useState(1)


  // Group variants by option (e.g., Color, Size)
  const options = product.options.filter((option) => option.values.length > 1)

  const handleAddToCart = async () => {
    if (!selectedVariant) return

    setIsAdding(true)
    try {
      await addToCart(selectedVariant.id, quantity)
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
        setSelectedMedia({ type: 'image', url: newVariant.image.url, altText: newVariant.image.altText })
      }
    }
  }

  const price = selectedVariant.price
  const compareAtPrice = selectedVariant.compareAtPrice
    
  const hasDiscount = compareAtPrice && Number.parseFloat(compareAtPrice.amount) > Number.parseFloat(price.amount)
  const discountPercentage = hasDiscount 
    ? Math.round(((Number.parseFloat(compareAtPrice.amount) - Number.parseFloat(price.amount)) / Number.parseFloat(compareAtPrice.amount)) * 100)
    : 0

    
  const quantityAvailable = selectedVariant.quantityAvailable ?? 999
  const isLowStock = quantityAvailable > 0 && quantityAvailable < 5

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Product Images/Videos */}
      <div className="space-y-4">
        {/* Main Media */}
        <div className="aspect-square relative overflow-hidden rounded-lg bg-muted">
          {selectedMedia.type === 'video' ? (
            <video
              src={selectedMedia.url}
              controls
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={selectedMedia.url || "/placeholder.svg?height=600&width=600"}
              alt={selectedMedia.altText || product.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Thumbnail Images/Videos */}
        {mediaItems.length > 1 && (
          <div className="grid grid-cols-4 gap-4">
            {mediaItems.map((media, index) => (
              <button
                key={index}
                onClick={() => setSelectedMedia(media)}
                className={`aspect-square relative overflow-hidden rounded-lg border-2 transition-colors ${
                  selectedMedia.url === media.url
                    ? "border-[#2a1a1f]"
                    : "border-transparent hover:border-muted-foreground/50"
                }`}
              >
                {media.type === 'video' ? (
                  <div className="relative w-full h-full bg-black/80 flex items-center justify-center">
                    <video
                      src={media.url}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                        <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-black border-b-4 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={media.url || "/placeholder.svg"}
                    alt={media.altText || `${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </div>


      {/* Product Info */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-balance">{product.title}</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-baseline gap-3">
              <span className={`text-2xl font-bold ${hasDiscount ? 'text-red-600' : ''}`}>
                £{Number.parseFloat(price.amount).toFixed(2)}
              </span>
              {hasDiscount && (
                <span className="text-lg text-muted-foreground line-through">
                  £{Number.parseFloat(compareAtPrice.amount).toFixed(2)}
                </span>
              )}
            </div>
            {hasDiscount && (
              <Badge className="bg-red-600 hover:bg-red-700 text-white font-semibold">
                SAVE {discountPercentage}%
              </Badge>
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
        <div className="flex items-center gap-3">
          {selectedVariant.availableForSale ? (
            <>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-muted-foreground">In Stock</span>
              </div>
              {isLowStock && (
                <Badge variant="outline" className="border-orange-500 text-orange-700 bg-orange-50">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Only {quantityAvailable} left!
                </Badge>
              )}
            </>
          ) : (
            <>
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-sm text-muted-foreground">Out of Stock</span>
            </>
          )}
        </div>
        
        {/* Quantity Selector */}
        <div className="space-y-3">
          <label className="text-sm font-semibold">Quantity</label>
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-lg">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                className="h-10 w-10 p-0"
              >
                -
              </Button>
              <div className="w-16 text-center font-semibold">
                {quantity}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuantity(quantity + 1)}
                className="h-10 w-10 p-0"
              >
                +
              </Button>
            </div>
            <span className="text-sm text-muted-foreground">
              Total: £{(Number.parseFloat(price.amount) * quantity).toFixed(2)}
            </span>
          </div>
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
