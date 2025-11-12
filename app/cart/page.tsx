import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { CartContent } from "@/components/cart-content";
import { getCart } from "@/lib/shopify/cart";

export const metadata = {
  title: "Shopping Cart | flawless_strands",
  description: "View your shopping cart",
};

export default async function CartPage() {
  const cart = await getCart();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <Breadcrumb />

          <h1 className="text-4xl font-serif font-bold mb-8">Shopping Cart</h1>
          <CartContent cart={cart} />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
