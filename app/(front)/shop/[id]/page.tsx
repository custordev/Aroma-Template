import DetailledProductCard from "@/components/DetailledProductCard";
import SimilarProducts from "@/components/SimilarProducts";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  // console.log(params.id);
  return (
    <div className="flex flex-col gap-6">
      <DetailledProductCard productId={params.id} />
      <SimilarProducts id={params.id} />
    </div>
  );
}
