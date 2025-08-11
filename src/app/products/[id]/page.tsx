import { ProductDetail } from "@/components/pages/product-detail"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return <ProductDetail productId={params.id} />
}
