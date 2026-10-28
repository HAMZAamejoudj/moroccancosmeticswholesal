import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://www.moroccancosmeticswholesale.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Moroccan Cosmetics Wholesale",
    template: "%s | Moroccan Cosmetics Wholesale",
  },
  description:
    "buy source 100% pure of Moroccan cosmetics wholesale from manufacturer, wholesaler and exporter with high quality and wholesale prices.",
  keywords: [
    "Moroccan cosmetics wholesale",
    "Moroccan cosmetics manufacturer",
    "Moroccan cosmetics exporter",
    "private label cosmetics Morocco",
    "argan oil cosmetics",
  ],
  authors: [{ name: "Moroccan Cosmetics Wholesale" }],
  icons: {
    icon: [
      { url: "/assets/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/assets/favicon/apple-touch-icon.png",
  },
  manifest: "/assets/favicon/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#6f5538",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return children;
}
