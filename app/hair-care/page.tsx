import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Droplets, Wind, Sparkles, Sun, Moon, AlertCircle, RefreshCw } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Hair Care Guide | LuxeHair",
  description: "Learn how to care for and maintain your premium hair extensions and wigs",
}

export default function HairCarePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          <Breadcrumb />

          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 md:mb-8">Flawless Strands Care & Maintenance Guide</h1>

          <Card className="mb-8 md:mb-12 bg-[#fee1e3]/30 border-none">
            <CardContent className="pt-4 md:pt-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2a1a1f] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Caring for your Flawless Strands extensions properly will help keep them soft, beautiful, and long-lasting. Whether you choose Bone Straight, French Curl, Deep Wave, or any of our other premium textures, please follow the instructions below to get the best results.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 md:space-y-8">
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Before Installing Your Flawless Strands Hair</h2>

              <div className="space-y-3 text-sm md:text-base text-muted-foreground">
                <p>
                  Flawless Strands extensions should be installed by a professional braider familiar with working with premium braiding textures like silky straight, curls, and waves.
                </p>
                <p>All our bundles come ready to braid, so they do not need to be brushed, stretched, or prepped before installation.</p>
                
                <div>
                  <p className="font-semibold text-foreground mb-2">For the best results:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Wash, blow-dry, and stretch your natural hair before braiding.</li>
                    <li>Ensure your braider works with clean, neat parting for a smooth finish.</li>
                    <li>For silky textures (especially Bone Straight), braid firmly down to the tips on the first install.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-[#fee1e3]/20 p-4 md:p-6 rounded-lg">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Texture-Specific Installation & Care</h2>
              
              <div className="space-y-6">
                {/* Bone Straight */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Bone Straight</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-muted-foreground">
                    <li>Comes ready to braid — no brushing or stretching needed.</li>
                    <li>Your natural hair should be blow-dried and smoothed before installation.</li>
                    <li>Braid all the way to the ends for a sleek finish.</li>
                    <li>Keep hair soft by misting lightly with water + leave-in conditioner.</li>
                  </ul>
                </div>

                {/* French Curl */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">French Curl</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-muted-foreground">
                    <li>Should be installed by a stylist experienced with silky or curly braiding hair.</li>
                    <li>Curls are pre-styled — do not apply hot water.</li>
                    <li>After braiding, apply mousse to define curls and reduce frizz.</li>
                    <li>Refresh with a water + leave-in conditioner mix.</li>
                    <li>Handle curls gently to maintain shape and shine.</li>
                  </ul>
                </div>

                {/* Deep Wave */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Deep Wave</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-muted-foreground">
                    <li>Deep Wave bundles come pre-curled and ready to braid.</li>
                    <li>Blow-dry and stretch your natural hair before installation for a neat finish.</li>
                    <li>Apply mousse after braiding to activate the waves.</li>
                    <li>Use a water + leave-in conditioner spray to maintain softness.</li>
                    <li>Finger-detangle only when damp — avoid brushing when dry.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">General Maintenance for All Textures</h2>

              <div className="space-y-5">
                {/* After Braiding */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">After Braiding</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-2">To keep your Flawless Strands extensions looking their best:</p>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-muted-foreground">
                    <li>Lightly mist hair with water + leave-in conditioner.</li>
                    <li>Finger-separate while damp.</li>
                    <li>Allow to air dry — no heat required.</li>
                    <li>Avoid detangling dry hair to prevent shedding or tangling.</li>
                    <li>Avoid heavy oils or thick products that can weigh the hair down.</li>
                  </ul>
                </div>

                {/* Daily Care */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Daily Care</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-muted-foreground">
                    <li>Use a pea-sized amount of braid cream or leave-in on the mid-lengths and ends only.</li>
                    <li>Apply mousse every 5–7 days to refresh curls, waves, or smooth straight styles.</li>
                    <li>Sleep with a satin bonnet or scarf to reduce friction and keep your style neat.</li>
                  </ul>
                </div>

                {/* Detangling */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Detangling</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-muted-foreground">
                    <li>Only detangle when the hair is damp and conditioned.</li>
                    <li>Start from the ends and work upward using your fingers or a wide-tooth comb.</li>
                    <li>Avoid combing dry curls or waves as this may disrupt the texture.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-[#2a1a1f]" />
                <h2 className="text-xl md:text-2xl font-semibold">Taking Down Your Braids</h2>
              </div>

              <div className="space-y-2 text-sm md:text-base text-muted-foreground">
                <p className="font-semibold text-foreground">For the safety of the hair:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Have your braids removed by a professional braider.</li>
                  <li>This prevents damage and keeps the hair cuticles aligned properly for reuse.</li>
                </ul>
              </div>
            </section>

            <section className="bg-[#fee1e3]/20 p-4 md:p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="h-6 w-6 text-[#2a1a1f]" />
                <h2 className="text-xl md:text-2xl font-semibold">Reusing Your Flawless Strands Hair</h2>
              </div>

              <div className="space-y-3 text-sm md:text-base text-muted-foreground">
                <p>With careful handling, your Flawless Strands extensions can be reused multiple times depending on the texture and how well they're maintained.</p>
                
                <div>
                  <p className="font-semibold text-foreground mb-2">After removal:</p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Wash gently with mild shampoo.</li>
                    <li>Condition thoroughly.</li>
                    <li>Allow the hair to air dry naturally.</li>
                    <li>Once fully dry, the hair is ready for reinstall.</li>
                  </ol>
                </div>

                <p className="italic">The number of reuses depends on proper care while installed.</p>
              </div>
            </section>

            {/* Washing */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="h-6 w-6 text-[#2a1a1f]" />
                <h2 className="text-xl md:text-2xl font-semibold">Washing Your Hair</h2>
              </div>

              <div className="space-y-3 text-sm md:text-base">
                <div className="pl-9">
                  <h3 className="font-semibold mb-2">Before Washing:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Gently detangle your hair with a wide-tooth comb, starting from the ends</li>
                    <li>Remove any hair accessories or clips</li>
                    <li>For wigs, secure the cap to prevent tangling</li>
                  </ul>
                </div>

                <div className="pl-9">
                  <h3 className="font-semibold mb-2">Washing Process:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Use lukewarm water - never hot water</li>
                    <li>Apply sulfate-free shampoo gently in a downward motion</li>
                    <li>Avoid rubbing or scrubbing which can cause tangling</li>
                    <li>Rinse thoroughly with cool water to seal the cuticles</li>
                    <li>Wash every 7-10 wears or as needed</li>
                  </ul>
                </div>

                <div className="pl-9">
                  <h3 className="font-semibold mb-2">Conditioning:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Apply a moisturizing, sulfate-free conditioner from mid-length to ends</li>
                    <li>Leave in for 3-5 minutes</li>
                    <li>Rinse with cool water</li>
                    <li>Use a deep conditioning treatment once a month</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Drying */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Wind className="h-6 w-6 text-[#2a1a1f]" />
                <h2 className="text-xl md:text-2xl font-semibold">Drying Your Hair</h2>
              </div>

              <div className="pl-9 space-y-3 text-sm md:text-base">
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>Best Practice:</strong> Air drying is always the gentlest option for your hair extensions
                    and wigs.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Gently squeeze out excess water with a microfiber towel - never rub</li>
                    <li>Pat dry, don't twist or wring</li>
                    <li>Place on a wig stand or mannequin head to air dry naturally</li>
                    <li>If using a blow dryer, use the lowest heat setting with a heat protectant</li>
                    <li>Keep the dryer at least 6 inches away from the hair</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Styling */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-[#2a1a1f]" />
                <h2 className="text-xl md:text-2xl font-semibold">Styling & Heat Protection</h2>
              </div>

              <div className="pl-9 space-y-3 text-sm md:text-base">
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>Heat Styling:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Always use a heat protectant spray before styling</li>
                    <li>Keep heat tools at 300°F (150°C) or lower</li>
                    <li>Avoid excessive heat styling - limit to 2-3 times per week</li>
                    <li>Use the lowest effective temperature for your desired style</li>
                  </ul>
                </div>

                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>General Styling:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Use a wide-tooth comb or loop brush designed for extensions</li>
                    <li>Detangle gently from ends to roots</li>
                    <li>Avoid tight hairstyles that put tension on the hair</li>
                    <li>Use silk or satin scrunchies instead of elastic bands</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Night Care */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Moon className="h-6 w-6 text-[#2a1a1f]" />
                <h2 className="text-xl md:text-2xl font-semibold">Nighttime Care</h2>
              </div>

              <div className="pl-9 space-y-2 text-sm md:text-base text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Gently brush your hair before bed to prevent tangling</li>
                  <li>Braid or loosely tie your hair in a low ponytail</li>
                  <li>Use a silk or satin pillowcase to reduce friction</li>
                  <li>For wigs, store on a wig stand or mannequin head</li>
                  <li>Keep wigs in a cool, dry place away from direct sunlight</li>
                </ul>
              </div>
            </section>

            {/* Products to Avoid */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-red-600" />
                <h2 className="text-xl md:text-2xl font-semibold">Products to Avoid</h2>
              </div>

              <div className="pl-9 space-y-2 text-sm md:text-base text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Sulfates - strip natural oils and cause dryness</li>
                  <li>Alcohol-based products - extremely drying</li>
                  <li>Heavy oils near the roots - can loosen bonds or wefts</li>
                  <li>Chlorine and salt water - protect hair before swimming</li>
                  <li>Products with mineral oil or petroleum</li>
                </ul>
              </div>
            </section>

            {/* Environmental Protection */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Sun className="h-6 w-6 text-[#2a1a1f]" />
                <h2 className="text-xl md:text-2xl font-semibold">Environmental Protection</h2>
              </div>

              <div className="pl-9 space-y-2 text-sm md:text-base text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Protect your hair from direct sunlight with a hat or UV protectant spray</li>
                  <li>Wear a swimming cap in chlorinated pools</li>
                  <li>Rinse immediately after swimming in salt water or pools</li>
                  <li>Avoid exposing hair to extreme cold or wind</li>
                  <li>Store wigs away from humidity and direct heat sources</li>
                </ul>
              </div>
            </section>

            {/* Recommended Schedule */}
            <section className="bg-[#fee1e3]/20 p-4 md:p-6 rounded-lg">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Recommended Care Schedule</h2>
              <div className="space-y-3 text-sm md:text-base">
                <div>
                  <p className="font-semibold">Daily:</p>
                  <p className="text-muted-foreground">Gently brush and detangle before and after wearing</p>
                </div>
                <div>
                  <p className="font-semibold">Weekly (or every 7-10 wears):</p>
                  <p className="text-muted-foreground">Wash with sulfate-free shampoo and conditioner</p>
                </div>
                <div>
                  <p className="font-semibold">Monthly:</p>
                  <p className="text-muted-foreground">Deep conditioning treatment for extra moisture</p>
                </div>
                <div>
                  <p className="font-semibold">As Needed:</p>
                  <p className="text-muted-foreground">
                    Apply leave-in conditioner or serum for added shine and protection
                  </p>
                </div>
              </div>
            </section>

            <section className="border-t pt-6 md:pt-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Need More Help?</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                If you have questions about caring for your specific hair type or product, please don't hesitate to
                contact us at flawlessstrands2025@gmail.com or through our{" "}
                <Link href="/contact" className="text-foreground underline hover:no-underline">
                  contact page
                </Link>
                . We're here to help you get the most out of your beautiful hair!
              </p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
