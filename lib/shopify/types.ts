export interface Product {
  id: string
  title: string
  handle: string
  description: string
  descriptionHtml?: string
  productType: string
  tags: string[]
  priceRange: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
  images: Array<{
    url: string
    altText: string | null
  }>
  media?: Array<{
    type: 'image' | 'video'
    url: string
    altText?: string | null
    mimeType?: string
  }>
  variants?: Array<{
    id: string
    title?: string
    availableForSale: boolean
    quantityAvailable?: number
    price?: {
      amount: string
      currencyCode: string
    }
    compareAtPrice?: {
      amount: string
      currencyCode: string
    } | null
    selectedOptions?: Array<{
      name: string
      value: string
    }>
    image?: {
      url: string
      altText: string | null
    } | null
  }>
  options?: Array<{
    name: string
    values: string[]
  }>
}
