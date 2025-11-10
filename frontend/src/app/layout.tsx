import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../styles/globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  //aqui definimos o titulo da aba do navegador e descricao
  title: "IFConecta DEV",
  description: "Portal do Instituto Federal Sapucaia do Sul"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
      </html>
  );
}
