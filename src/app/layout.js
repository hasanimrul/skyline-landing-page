"use client"
import "../../styles/globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-roboto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
