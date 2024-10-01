import DetailledProductCard from "@/components/DetailledProductCard";
import SimilarProducts from "@/components/SimilarProducts";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const session = await getServerSession(authOptions);
  // console.log(params.id);
  return (
    <div className="flex flex-col gap-6">
      <DetailledProductCard productId={params.id} session={session}/>
      <SimilarProducts id={params.id} />
    </div>
  );
}
