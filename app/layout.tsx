import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Ramu Dosapati | Senior Backend Engineer & GenAI Engineer",
  description:
    "Software Engineer with 5+ years of experience building enterprise-grade applications using Java, Spring Boot, Kafka, MongoDB, GraphQL, Microservices, AWS, and Generative AI solutions.",
  keywords: [
    "Ramu Dosapati",
    "Senior Backend Engineer",
    "Java Developer",
    "Spring Boot",
    "Kafka",
    "GenAI Engineer",
    "Microservices",
    "Software Architect",
    "Hyderabad",
    "India",
  ],
  authors: [{ name: "Ramu Dosapati" }],
  creator: "Ramu Dosapati",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramudosapati.dev",
    title: "Ramu Dosapati | Senior Backend Engineer & GenAI Engineer",
    description:
      "Software Engineer with 5+ years building enterprise applications with Java, Spring Boot, Kafka, and Generative AI.",
    siteName: "Ramu Dosapati Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ramu Dosapati - Senior Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramu Dosapati | Senior Backend Engineer & GenAI Engineer",
    description:
      "Software Engineer with 5+ years building enterprise applications with Java, Spring Boot, Kafka, and Generative AI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
