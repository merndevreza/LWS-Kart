import { usePathname } from "next/navigation";

export default function useCurrentLocale(){
   const pathname = usePathname();
   let locale = "";
 
   if (pathname.includes("/bn") || pathname.includes("/bn/")) {
     locale = "/bn";
   } else {
     locale = "/en";
   } 
   return locale
}