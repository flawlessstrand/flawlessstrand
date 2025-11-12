// Shopify Storefront API utilities
const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || ""
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || ""

const SHOPIFY_GRAPHQL_URL = `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`

const FALLBACK_COLLECTIONS = [
  {
    id: "fallback-1",
    handle: "closures",
    title: "Closures",
    description: "Premium lace closures for a natural hairline",
    image: {
      url: "/hair-closure-piece.jpg",
      altText: "Hair Closures Collection",
    },
  },
  {
    id: "fallback-2",
    handle: "frontals",
    title: "Frontals",
    description: "Full lace frontals for versatile styling",
    image: {
      url: "/hair-frontal-piece.jpg",
      altText: "Hair Frontals Collection",
    },
  },
  {
    id: "fallback-3",
    handle: "bundles",
    title: "Bundles",
    description: "Premium hair bundles in various textures",
    image: {
      url: "/hair-bundles.png",
      altText: "Hair Bundles Collection",
    },
  },
  {
    id: "fallback-4",
    handle: "wigs",
    title: "Wigs",
    description: "Ready-to-wear luxury wigs",
    image: {
      url: "/luxury-wig.jpg",
      altText: "Wigs Collection",
    },
  },
]

const FALLBACK_PRODUCTS = [
  {
    id: "fallback-product-1",
    handle: "straight-bundle-set",
    title: "Straight Bundle Set",
    description: "Premium straight hair bundles - 3 piece set",
    priceRange: {
      minVariantPrice: {
        amount: "189.99",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "/straight-hair-bundles.jpg",
            altText: "Straight Bundle Set",
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "variant-1",
            availableForSale: true,
          },
        },
      ],
    },
  },
  {
    id: "fallback-product-2",
    handle: "body-wave-bundle",
    title: "Body Wave Bundle",
    description: "Luxurious body wave texture - 3 piece set",
    priceRange: {
      minVariantPrice: {
        amount: "199.99",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "/body-wave-hair-bundles.jpg",
            altText: "Body Wave Bundle",
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "variant-2",
            availableForSale: true,
          },
        },
      ],
    },
  },
  {
    id: "fallback-product-3",
    handle: "deep-wave-bundle",
    title: "Deep Wave Bundle",
    description: "Beautiful deep wave pattern - 3 piece set",
    priceRange: {
      minVariantPrice: {
        amount: "209.99",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "/deep-wave-hair-bundles.png",
            altText: "Deep Wave Bundle",
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "variant-3",
            availableForSale: true,
          },
        },
      ],
    },
  },
  {
    id: "fallback-product-4",
    handle: "curly-bundle-set",
    title: "Curly Bundle Set",
    description: "Tight curly texture - 3 piece set",
    priceRange: {
      minVariantPrice: {
        amount: "219.99",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "/curly-hair-bundles.jpg",
            altText: "Curly Bundle Set",
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "variant-4",
            availableForSale: true,
          },
        },
      ],
    },
  },
]

export async function shopifyFetch<T>({
  query,
  variables = {},
}: {
  query: string
  variables?: Record<string, unknown>
}): Promise<T> {
  try {
    const result = await fetch(SHOPIFY_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!result.ok) {
      throw new Error(`Shopify API error: ${result.statusText}`)
    }

    const json = await result.json()

    if (json.errors) {
      throw new Error(json.errors[0].message)
    }

    return json.data
  } catch (error) {
    console.error("[v0] Shopify fetch error:", error)
    throw error
  }
}

// Get all collections
export async function getCollections() {
  if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    console.log("[v0] Using fallback collections - Shopify not configured")
    return FALLBACK_COLLECTIONS
  }

  const query = `
    query GetCollections {
      collections(first: 10) {
        edges {
          node {
            id
            title
            handle
            description
            image {
              url
              altText
            }
          }
        }
      }
    }
  `

  try {
    const data = await shopifyFetch<{
      collections: {
        edges: Array<{
          node: {
            id: string
            title: string
            handle: string
            description: string
            image: { url: string; altText: string } | null
          }
        }>
      }
    }>({ query })

    return data.collections.edges.map((edge) => edge.node)
  } catch (error) {
    console.error("[v0] Error fetching collections:", error)
    return FALLBACK_COLLECTIONS
  }
}

// Get products by collection
export async function getProductsByCollection(handle: string) {
  const query = `
    query GetProductsByCollection($handle: String!) {
      collection(handle: $handle) {
        title
        products(first: 20) {
          edges {
            node {
              id
              title
              handle
              description
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
              variants(first: 10) {
                edges {
                  node {
                    id
                    title
                    availableForSale
                    selectedOptions {
                      name
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `

  try {
    const data = await shopifyFetch<{
      collection: {
        title: string
        products: {
          edges: Array<{
            node: {
              id: string
              title: string
              handle: string
              description: string
              priceRange: {
                minVariantPrice: {
                  amount: string
                  currencyCode: string
                }
              }
              images: {
                edges: Array<{
                  node: {
                    url: string
                    altText: string
                  }
                }>
              }
              variants: {
                edges: Array<{
                  node: {
                    id: string
                    title: string
                    availableForSale: boolean
                    selectedOptions: Array<{
                      name: string
                      value: string
                    }>
                  }
                }>
              }
            }
          }>
        }
      }
    }>({ query, variables: { handle } })

    return {
      title: data.collection.title,
      products: data.collection.products.edges.map((edge) => edge.node),
    }
  } catch (error) {
    console.error("[v0] Error fetching products by collection:", error)
    return { title: "", products: [] }
  }
}

// Get single product by handle
export async function getProduct(handle: string) {
  const query = `
    query GetProduct($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description
        descriptionHtml
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 10) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 50) {
          edges {
            node {
              id
              title
              availableForSale
              priceV2 {
                amount
                currencyCode
              }
              selectedOptions {
                name
                value
              }
              image {
                url
                altText
              }
            }
          }
        }
      }
    }
  `

  try {
    const data = await shopifyFetch<{
      product: {
        id: string
        title: string
        handle: string
        description: string
        descriptionHtml: string
        priceRange: {
          minVariantPrice: {
            amount: string
            currencyCode: string
          }
        }
        images: {
          edges: Array<{
            node: {
              url: string
              altText: string
            }
          }>
        }
        variants: {
          edges: Array<{
            node: {
              id: string
              title: string
              availableForSale: boolean
              priceV2: {
                amount: string
                currencyCode: string
              }
              selectedOptions: Array<{
                name: string
                value: string
              }>
              image: {
                url: string
                altText: string
              } | null
            }
          }>
        }
      }
    }>({ query, variables: { handle } })

    return data.product
  } catch (error) {
    console.error("[v0] Error fetching product:", error)
    return null
  }
}

// Helper to extract Shopify product ID from global ID
export function getShopifyProductId(globalId: string): string {
  return globalId.split("/").pop() || ""
}

// Format price
export function formatPrice(amount: string, currencyCode: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(Number.parseFloat(amount))
}

export async function getProducts({ first = 20, query }: { first?: number; query?: string } = {}) {
  if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    console.log("[v0] Using fallback products - Shopify not configured")
    return FALLBACK_PRODUCTS.slice(0, first)
  }

  const graphqlQuery = `
    query GetProducts($first: Int!, $query: String) {
      products(first: $first, query: $query) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  availableForSale
                }
              }
            }
          }
        }
      }
    }
  `

  try {
    const data = await shopifyFetch<{
      products: {
        edges: Array<{
          node: {
            id: string
            title: string
            handle: string
            description: string
            priceRange: {
              minVariantPrice: {
                amount: string
                currencyCode: string
              }
            }
            images: {
              edges: Array<{
                node: {
                  url: string
                  altText: string
                }
              }>
            }
            variants: {
              edges: Array<{
                node: {
                  id: string
                  availableForSale: boolean
                }
              }>
            }
          }
        }>
      }
    }>({ query: graphqlQuery, variables: { first, query } })

    return data.products.edges.map((edge) => edge.node)
  } catch (error) {
    console.error("[v0] Error fetching products:", error)
    return FALLBACK_PRODUCTS.slice(0, first)
  }
}

export async function getCollection(handle: string) {
  if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    console.log("[v0] Using fallback collection - Shopify not configured")
    const collection = FALLBACK_COLLECTIONS.find((c) => c.handle === handle)
    if (collection) {
      return {
        ...collection,
        products: FALLBACK_PRODUCTS,
      }
    }
    return null
  }

  const query = `
    query GetCollection($handle: String!) {
      collection(handle: $handle) {
        id
        title
        handle
        description
        image {
          url
          altText
        }
        products(first: 50) {
          edges {
            node {
              id
              title
              handle
              description
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
              variants(first: 1) {
                edges {
                  node {
                    id
                    availableForSale
                  }
                }
              }
            }
          }
        }
      }
    }
  `

  try {
    const data = await shopifyFetch<{
      collection: {
        id: string
        title: string
        handle: string
        description: string
        image: { url: string; altText: string } | null
        products: {
          edges: Array<{
            node: {
              id: string
              title: string
              handle: string
              description: string
              priceRange: {
                minVariantPrice: {
                  amount: string
                  currencyCode: string
                }
              }
              images: {
                edges: Array<{
                  node: {
                    url: string
                    altText: string
                  }
                }>
              }
              variants: {
                edges: Array<{
                  node: {
                    id: string
                    availableForSale: boolean
                  }
                }>
              }
            }
          }>
        }
      }
    }>({ query, variables: { handle } })

    if (!data.collection) {
      return null
    }

    return {
      ...data.collection,
      products: data.collection.products.edges.map((edge) => edge.node),
    }
  } catch (error) {
    console.error("[v0] Error fetching collection:", error)
    const collection = FALLBACK_COLLECTIONS.find((c) => c.handle === handle)
    if (collection) {
      return {
        ...collection,
        products: FALLBACK_PRODUCTS,
      }
    }
    return null
  }
}
