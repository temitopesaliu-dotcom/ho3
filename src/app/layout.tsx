import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Built for You",
  description: "AI — Done for You. Digital products for businesses, coaches, creators, consultants and founders.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
