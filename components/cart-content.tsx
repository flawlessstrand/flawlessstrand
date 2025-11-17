"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2, ShoppingBag } from "lucide-react"
import { useState } from "react"

interface CartLine {
  id: string
  quantity: number
  merchandise: {
    id: string
    title: string
    priceV2: {
      amount: string
      currencyCode: string
    }
    product: {
      id: string
      title: string
      handle: string
      featuredImage: {
        url: string
        altText: string | null
      }
    }
  }
}

interface Cart {
  id: string
  checkoutUrl: string
  lines: {
    edges: Array<{
      node: CartLine
    }>
  }
  cost: {
    totalAmount: {
      amount: string
      currencyCode: string
    }
    subtotalAmount: {
      amount: string
      currencyCode: string
    }
  }
}

interface CartContentProps {
  cart: Cart | null
}

export function CartContent({ cart }: CartContentProps) {
  const [isLoading, setIsLoading] = useState(false)

  if (!cart || cart.lines.edges.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">Add some products to get started</p>
        <Button asChild className="bg-[#2a1a1f] hover:bg-[#2a1a1f]/90">
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  const lines = cart.lines.edges.map((edge) => edge.node)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-4">
        {lines.map((line) => (
          <Card key={line.id} className="border-none shadow-sm">
            <CardContent className="p-4">
              <div className="flex gap-4">
                {/* Product Image */}
                <Link href={`/products/${line.merchandise.product.handle}`} className="flex-shrink-0">
                  <img
                    src={line.merchandise.product.featuredImage.url || "/placeholder.svg"}
                    alt={line.merchandise.product.featuredImage.altText || line.merchandise.product.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </Link>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <Link href={`/products/${line.merchandise.product.handle}`}>
                    <h3 className="font-semibold hover:underline">{line.merchandise.product.title}</h3>
                  </Link>
                  <p className="text-sm text-muted-foreground">{line.merchandise.title}</p>
                  <p className="text-lg font-semibold mt-2">
                    £{Number.parseFloat(line.merchandise.priceV2.amount).toFixed(2)}{" "}
                    {line.merchandise.priceV2.currencyCode}
                  </p>
                </div>

                {/* Quantity & Remove */}
                <div className="flex flex-col items-end justify-between">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                  <div className="text-sm text-muted-foreground">Qty: {line.quantity}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <Card className="border-none shadow-sm sticky top-4">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>
                  ${Number.parseFloat(cart.cost.subtotalAmount.amount).toFixed(2)}{" "}
                  {cart.cost.subtotalAmount.currencyCode}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>
                    ${Number.parseFloat(cart.cost.totalAmount.amount).toFixed(2)} {cart.cost.totalAmount.currencyCode}
                  </span>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="w-full bg-[#2a1a1f] hover:bg-[#2a1a1f]/90" disabled={isLoading}>
              <a href={cart.checkoutUrl}>{isLoading ? "Processing..." : "Proceed to Checkout"}</a>
            </Button>

            <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
              <Link href="/shop">Continue Shopping</Link>
            </Button>

            {/* Trust Badges */}
            <div className="pt-4 border-t space-y-2 text-xs text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Secure checkout
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Free worldwide shipping
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-600">✓</span> 30-day return policy
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
