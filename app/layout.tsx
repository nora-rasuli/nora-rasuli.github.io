import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";
const siteUrl = "https://nora-rasuli.github.io";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nora Rasuli — Frontend/UI Engineer",
    template: "%s — Nora Rasuli",
  },
  description:
    "Frontend/UI Engineer building accessible, high-performance React and TypeScript products and AI interfaces.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Nora Rasuli — Frontend/UI Engineer",
    description:
      "Accessible products that make complex systems understandable.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Nora Rasuli, Frontend/UI Engineer",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nora Rasuli",
    jobTitle: "Frontend/UI Engineer",
    url: siteUrl,
    sameAs: [
      "https://github.com/nora-rasuli",
      "https://www.linkedin.com/in/nora-rasuli/",
    ],
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      </body>
    </html>
  );
}
