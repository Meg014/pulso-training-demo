import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "PULSO Training Club — Supere seus limites.",
  description: site.description,
  applicationName: site.name,
  robots: { index: false, follow: true },
  openGraph: {
    title: "PULSO — Supere seus limites.",
    description: site.description,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "PULSO Training Club — projeto conceitual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/images/club.jpg"],
  },
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = { themeColor: "#111613" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
