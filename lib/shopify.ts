// Shopify Storefront API utilities
const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || ""
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || ""

const SHOPIFY_GRAPHQL_URL = `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`

import { shopifyFetch } from "./shopify/client"

// Get single product by handle
export async function getProduct(handle: string) {
  console.log("[v0] Getting product with handle:", handle)
  
  const query = `
    query GetProduct($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description
        descriptionHtml
        productType
        tags
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
        media(first: 10) {
          edges {
            node {
              ... on MediaImage {
                id
                image {
                  url
                  altText
                }
                mediaContentType
              }
              ... on Video {
                id
                sources {
                  url
                  mimeType
                }
                mediaContentType
              }
            }
          }
        }
        variants(first: 50) {
          edges {
            node {
              id
              title
              availableForSale
              quantityAvailable
              priceV2 {
                amount
                currencyCode
              }
              compareAtPriceV2 {
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
        options {
          name
          values
        }
      }
    }
  `

  try {
    console.log("[v0] Fetching product from Shopify API...")
    const data = await shopifyFetch<{
      product: {
        id: string
        title: string
        handle: string
        description: string
        descriptionHtml: string
        productType: string
        tags: string[]
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
        media: {
          edges: Array<{
            node: {
              id: string
              mediaContentType: string
              image?: {
                url: string
                altText: string
              }
              sources?: Array<{
                url: string
                mimeType: string
              }>
            }
          }>
        }
        variants: {
          edges: Array<{
            node: {
              id: string
              title: string
              availableForSale: boolean
              quantityAvailable?: number
              priceV2: {
                amount: string
                currencyCode: string
              }
              compareAtPriceV2?: {
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
        options: Array<{
          name: string
          values: string[]
        }>
      } | null
    }>({ query, variables: { handle } })

    if (!data.product) {
      console.error(`[v0] Product not found in Shopify with handle: "${handle}". Make sure the product exists in your Shopify store.`)
      return null
    }

    console.log("[v0] Product found:", data.product.title)
    console.log("[v0] Product media count:", data.product.media.edges.length)
    console.log("[v0] Product variants count:", data.product.variants.edges.length)
    
    const media = data.product.media.edges.map(edge => {
      if (edge.node.mediaContentType === 'VIDEO' && edge.node.sources) {
        return {
          type: 'video' as const,
          url: edge.node.sources[0]?.url || '',
          mimeType: edge.node.sources[0]?.mimeType || 'video/mp4'
        }
      }
      return {
        type: 'image' as const,
        url: edge.node.image?.url || '',
        altText: edge.node.image?.altText || null
      }
    })
    
    // Transform the data to match component expectations
    return {
      id: data.product.id,
      title: data.product.title,
      handle: data.product.handle,
      description: data.product.description,
      descriptionHtml: data.product.descriptionHtml,
      productType: data.product.productType,
      tags: data.product.tags,
      priceRange: data.product.priceRange,
      images: data.product.images.edges.map(edge => edge.node),
      media, // Add media array with images and videos
      variants: data.product.variants.edges.map(edge => ({
        id: edge.node.id,
        title: edge.node.title,
        availableForSale: edge.node.availableForSale,
        quantityAvailable: edge.node.quantityAvailable, // Add inventory quantity
        price: edge.node.priceV2,
        compareAtPrice: edge.node.compareAtPriceV2 || null,
        selectedOptions: edge.node.selectedOptions,
        image: edge.node.image
      })),
      options: data.product.options
    }
  } catch (error) {
    console.error("[v0] Error fetching product:", error)
    return null
  }
}

// Get all products
export async function getProducts({ first = 20, query }: { first?: number; query?: string } = {}) {
  const graphqlQuery = `
    query GetProducts($first: Int!, $query: String) {
      products(first: $first, query: $query) {
        edges {
          node {
            id
            title
            handle
            description
            productType
            tags
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
                  priceV2 {
                    amount
                    currencyCode
                  }
                  compareAtPriceV2 {
                    amount
                    currencyCode
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
    console.log(`[v0] Fetching ${first} products${query ? ` with query: ${query}` : ""}`)
    const data = await shopifyFetch<{
      products: {
        edges: Array<{
          node: {
            id: string
            title: string
            handle: string
            description: string
            productType: string
            tags: string[]
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
                  priceV2: {
                    amount: string
                    currencyCode: string
                  }
                  compareAtPriceV2?: {
                    amount: string
                    currencyCode: string
                  }
                }
              }>
            }
          }
        }>
      }
    }>({ query: graphqlQuery, variables: { first, query } })

    const products = data.products.edges.map((edge) => ({
      id: edge.node.id,
      title: edge.node.title,
      handle: edge.node.handle,
      description: edge.node.description,
      productType: edge.node.productType,
      tags: edge.node.tags,
      priceRange: edge.node.priceRange,
      images: edge.node.images.edges.map(imgEdge => imgEdge.node),
      variants: edge.node.variants.edges.map(varEdge => ({
        id: varEdge.node.id,
        availableForSale: varEdge.node.availableForSale,
        price: varEdge.node.priceV2,
        compareAtPrice: varEdge.node.compareAtPriceV2 || null
      }))
    }))
    
    console.log(`[v0] Found ${products.length} products`)
    if (query?.includes('tag:')) {
      console.log('[v0] Products with requested tags:', products.map(p => ({ title: p.title, tags: p.tags })))
    }
    
    return products
  } catch (error) {
    console.error("[v0] Error fetching products:", error)
    return []
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
