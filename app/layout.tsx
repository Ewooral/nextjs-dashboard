"use client";
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import CustomHeader from "@/components/header/CustomHeader";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {path.startsWith("/dashboard") ? "" : <CustomHeader />}
        {children}
      </body>
    </html>
  );
}
