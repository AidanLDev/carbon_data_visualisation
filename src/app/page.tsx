import Header from "@/components/Header";
import { HeroImage } from "@/components/HeroImage";
import { getCarbonDateRange } from "@utils/getData";

export default async function Home() {
  const { data: carbonData } = await getCarbonDateRange("2017-10-01");
  console.log(carbonData);
  return (
    <main>
      <Header />
      <HeroImage />
    </main>
  );
}
