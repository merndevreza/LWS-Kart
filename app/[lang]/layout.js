import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { getDictionary } from "./dictionary/dictionary";

export default async function RootLayout({ children, params: { lang } }) {
  const dictionary=await getDictionary(lang)
  return (
    <>
      <Header dictionary={dictionary}/>
      <Navbar dictionary={dictionary}/>
      {children}
      <div id="modal-portal"></div>
      <Footer dictionary={dictionary}/>
    </>
  );
}
