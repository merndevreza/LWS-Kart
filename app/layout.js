import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Poppins, Roboto } from "next/font/google";
import "./globals.css"; 
import connectMongo from "@/database/services/connectMongo";
import AuthProvider from "./contextProvider/providers/AuthProvider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "LWSkart",
  description: "Get all types of home decor in one place.",
};

export default async function RootLayout({ children }) {
await connectMongo()
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable}`}> 
      <AuthProvider>
        {children} 
      </AuthProvider>
      </body>
    </html>
  );
}
