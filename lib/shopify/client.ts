const SHOPIFY_DOMAIN = "v41qes-pj.myshopify.com"
const SHOPIFY_TOKEN = "d36e5e6a360af01e34182b1e17fb2f2d"

export async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string
  variables?: Record<string, unknown>
}): Promise<T> {
  if (!SHOPIFY_DOMAIN || !SHOPIFY_TOKEN) {
    console.log("[v0] Shopify not configured, returning empty data")
    return {} as T
  }

  const endpoint = `https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.statusText}`)
    }

    const json = await response.json()

    if (json.errors) {
      console.error("[v0] Shopify GraphQL errors:", json.errors)
      throw new Error(json.errors[0]?.message || "Unknown GraphQL error")
    }

    return json.data as T
  } catch (error) {
    console.error("[v0] Shopify fetch error:", error)
    return {} as T
  }
}
