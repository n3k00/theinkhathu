import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "သိင်္ခသူ - ခရီးသည်နှင့်ကုန်စည် ပို့ဆောင်ရေး",
  description: "တောင်ကြီး၊ တာချီလိတ်၊ လားရှိုး ယာဥ်လိုင်းပြေးဆွဲ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="my" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
