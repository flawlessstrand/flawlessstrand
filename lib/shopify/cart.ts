"use server"

import { cookies } from "next/headers"
import { shopifyFetch } from "./client"

const CART_COOKIE = "shopify_cart_id"

// GraphQL mutations for cart operations
const CREATE_CART_MUTATION = `
  mutation createCart($lineItems: [CartLineInput!]) {
    cartCreate(input: { lines: $lineItems }) {
      cart {
        id
        checkoutUrl
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  priceV2 {
                    amount
                    currencyCode
                  }
                  product {
                    id
                    title
                    handle
                    featuredImage {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`

const ADD_TO_CART_MUTATION = `
  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  priceV2 {
                    amount
                    currencyCode
                  }
                  product {
                    id
                    title
                    handle
                    featuredImage {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`

const GET_CART_QUERY = `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
                priceV2 {
                  amount
                  currencyCode
                }
                product {
                  id
                  title
                  handle
                  featuredImage {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
      }
    }
  }
`

const REMOVE_FROM_CART_MUTATION = `
  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        checkoutUrl
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  priceV2 {
                    amount
                    currencyCode
                  }
                  product {
                    id
                    title
                    handle
                    featuredImage {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`

export async function addToCart(variantId: string, quantity: number) {
  const cookieStore = await cookies()
  let cartId = cookieStore.get(CART_COOKIE)?.value

  const lineItems = [
    {
      merchandiseId: variantId,
      quantity,
    },
  ]

  if (!cartId) {
    // Create new cart
    const response = await shopifyFetch({
      query: CREATE_CART_MUTATION,
      variables: { lineItems },
    })

    cartId = response.cartCreate.cart.id
    cookieStore.set(CART_COOKIE, cartId, {
      maxAge: 60 * 60 * 24 * 7, // 7 days
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })

    return response.cartCreate.cart
  } else {
    // Add to existing cart
    const response = await shopifyFetch({
      query: ADD_TO_CART_MUTATION,
      variables: { cartId, lines: lineItems },
    })

    return response.cartLinesAdd.cart
  }
}

export async function getCart() {
  const cookieStore = await cookies()
  const cartId = cookieStore.get(CART_COOKIE)?.value

  if (!cartId) {
    return null
  }

  const response = await shopifyFetch({
    query: GET_CART_QUERY,
    variables: { cartId },
  })

  return response.cart
}

export async function removeFromCart(lineId: string) {
  const cookieStore = await cookies()
  const cartId = cookieStore.get(CART_COOKIE)?.value

  if (!cartId) {
    return null
  }

  const response = await shopifyFetch({
    query: REMOVE_FROM_CART_MUTATION,
    variables: { cartId, lineIds: [lineId] },
  })

  return response.cartLinesRemove.cart
}
