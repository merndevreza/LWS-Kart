import CTA from "@/components/Home/CTA";
import Categories from "@/components/Home/Categories";
import FeaturesInfo from "@/components/Home/FeaturesInfo";
import Hero from "@/components/Home/Hero";
import NewArrival from "@/components/Home/NewArrival";
import ProductsSection from "@/components/Home/ProductsSection";
import { getDictionary } from "./dictionary/dictionary";
import { auth } from "@/auth";

export default async function Home ({params:{lang}}) {
  const dictionary=await getDictionary(lang)
  const session=await auth()
  console.log(session);
  return (
    <main>
      <Hero dictionary={dictionary}/>
      <FeaturesInfo dictionary={dictionary}/>
      <Categories dictionary={dictionary}/>
      <NewArrival dictionary={dictionary}/>
      <CTA/>
      <ProductsSection dictionary={dictionary}/>
    </main>
  );
}
