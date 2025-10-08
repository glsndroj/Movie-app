import { DetailHeader } from "@/components/Detailheader";
import { DetailImages } from "@/components/Detailimage";
import { DetailDesc } from "@/components/Detaildesc";

export default async function Home({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className=" w-full flex flex-col items-center px-45">
      <DetailHeader id={id} />
      <DetailImages id={id} />
      <DetailDesc id={id} />
    </div>
  );
}
