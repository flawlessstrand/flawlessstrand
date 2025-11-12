import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { SiTiktok, SiWhatsapp } from "react-icons/si"; // ✅ Add this


export function SiteFooter() {
  return (
    <footer className="bg-[#fee1e3] border-t border-black">
      {/* Main Footer Content - 3 Sections */}
      <div className="border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto]">
          {/* Section 1 - Social Media */}
          <div className="p-3 md:p-4 border-b md:border-b-0 md:border-r border-black min-w-[180px]">
            <div className="flex gap-3 justify-center md:justify-start">
              <Link
                href="https://www.instagram.com/_flawless_strands?igsh=YXA0bzEya2lsMGVy&utm_source=qr"
                target="_blank"
                className="hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              {/* ✅ TikTok Link */}
              <Link
                href="https://www.tiktok.com/@_flawless_strands"
                target="_blank"
                className="hover:opacity-70 transition-opacity"
                aria-label="TikTok"
              >
                <SiTiktok className="w-5 h-5" />
              </Link>

              {/* ✅ WhatsApp Link */}
              <Link
                href="https://wa.me/447594166687" // Replace with your WhatsApp number in international format
                target="_blank"
                className="hover:opacity-70 transition-opacity"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-5 h-5 text-green-600" />
              </Link>

            </div>
          </div>

          {/* Section 2 - Links in Two Columns */}
          <div className="p-3 md:p-4 border-b md:border-b-0 md:border-r border-black">
            <div className="grid grid-cols-2 gap-x-6 md:gap-x-12 gap-y-2 md:gap-y-2 max-w-md mx-auto md:mx-0">
              <Link
                href="/about"
                className="text-sm text-foreground hover:underline"
              >
                about us
              </Link>
              <Link
                href="/contact"
                className="text-sm text-foreground hover:underline"
              >
                contact us
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-foreground hover:underline"
              >
                privacy policy
              </Link>
              <Link
                href="/shipping"
                className="text-sm text-foreground hover:underline"
              >
                shipping & returns
              </Link>
            </div>
          </div>

          {/* Section 3 - Newsletter */}
          <div className="p-3 md:p-4 space-y-2 md:space-y-2 md:min-w-[320px]">
            <h3 className="text-sm font-normal">
              subscribe to our newsletter.
            </h3>
            <form className="space-y-2 md:space-y-2">
              <Input
                type="email"
                placeholder="your@email.address"
                className="bg-white border-gray-300 rounded-none h-9 text-sm"
              />
              <Button
                type="submit"
                className="w-full bg-[#a89b8f] hover:bg-[#968a7e] text-white rounded-none h-9 text-sm font-normal uppercase tracking-wider"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Payment Methods Row */}
      <div className="border-b border-black py-3 md:py-4">
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-2 px-3 md:px-4">
          <img
            src="/payment-icons/amex.svg"
            alt="American Express"
            className="h-6"
          />
          <img
            src="/payment-icons/apple-pay.svg"
            alt="Apple Pay"
            className="h-6"
          />
          <img
            src="/payment-icons/bancontact.svg"
            alt="Bancontact"
            className="h-6"
          />
          <img
            src="/payment-icons/diners.svg"
            alt="Diners Club"
            className="h-6"
          />
          <img
            src="/payment-icons/discover.svg"
            alt="Discover"
            className="h-6"
          />
          <img
            src="/payment-icons/google-pay.svg"
            alt="Google Pay"
            className="h-6"
          />
          <img src="/payment-icons/ideal.svg" alt="iDEAL" className="h-6" />
          <img src="/payment-icons/klarna.svg" alt="Klarna" className="h-6" />
          <img src="/payment-icons/maestro.svg" alt="Maestro" className="h-6" />
          <img
            src="/payment-icons/mastercard.svg"
            alt="Mastercard"
            className="h-6"
          />
          <img
            src="/payment-icons/shop-pay.svg"
            alt="Shop Pay"
            className="h-6"
          />
          <img
            src="/payment-icons/union-pay.svg"
            alt="Union Pay"
            className="h-6"
          />
          <img src="/payment-icons/visa.svg" alt="Visa" className="h-6" />
        </div>
      </div>

      {/* Copyright Row */}
      <div className="py-3">
        <p className="text-center text-sm text-foreground">
          © 2025 flawless_strands. all rights reserved.
        </p>
      </div>
    </footer>
  );
}
