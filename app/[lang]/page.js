import CTA from "@/components/Home/CTA";
import Categories from "@/components/Home/Categories";
import FeaturesInfo from "@/components/Home/FeaturesInfo";
import Hero from "@/components/Home/Hero";
import NewArrival from "@/components/Home/NewArrival";
import { getDictionary } from "./dictionary/dictionary";
import TrendingProducts from "@/components/Home/TrendingProducts"; 

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang); 
  return (
    <main>
      <Hero dictionary={dictionary} />
      <FeaturesInfo dictionary={dictionary} />
      <Categories dictionary={dictionary} />
      <NewArrival dictionary={dictionary} />
      <CTA />
      <TrendingProducts dictionary={dictionary} />
    </main>
  );
}
