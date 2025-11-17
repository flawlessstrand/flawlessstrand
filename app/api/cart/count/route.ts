import { NextResponse } from "next/server"
import { getCart } from "@/lib/shopify/cart"

export async function GET() {
  try {
    const cart = await getCart()
    
    if (!cart || !cart.lines?.edges) {
      return NextResponse.json({ count: 0 })
    }

    // Calculate total quantity of items in cart
    const count = cart.lines.edges.reduce((total: number, edge: any) => {
      return total + (edge.node.quantity || 0)
    }, 0)

    return NextResponse.json({ count })
  } catch (error) {
    console.error("Error fetching cart count:", error)
    return NextResponse.json({ count: 0 })
  }
}
