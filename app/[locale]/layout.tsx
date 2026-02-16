import type { Metadata } from "next";
import { Roboto, Doto } from "next/font/google"; // Use Doto as requested
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const doto = Doto({
  weight: ["400", "700"], // Adjust weights as needed
  subsets: ["latin"],
  variable: "--font-doto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diego Carrillo | Software Developer Portfolio",
  description:
    "Portfolio of Diego Carrillo Arroyo - Full Stack Software Developer specialized in Next.js, React, and Cloud Technologies based in Costa Rica.",
  keywords: [
    "Software Developer",
    "Full Stack",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Diego Carrillo",
    "Costa Rica",
    "Web Development",
    "Chakra UI",
  ],
  authors: [{ name: "Diego Carrillo Arroyo" }],
  creator: "Diego Carrillo Arroyo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://diego-carrillo.com",
    title: "Diego Carrillo | Software Developer Portfolio",
    description:
      "Explore the portfolio of Diego Carrillo Arroyo, a Full Stack Developer from Costa Rica specializing in modern web technologies like Next.js and React.",
    siteName: "Diego Carrillo Portfolio",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "Diego Carrillo Portfolio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Carrillo | Software Developer Portfolio",
    description:
      "Explore the portfolio of Diego Carrillo Arroyo, a Full Stack Developer from Costa Rica specializing in modern web technologies.",
    images: ["/icon-512x512.png"],
  },
  icons: {
    icon: "/icon-512x512.png",
    apple: "/icon-512x512.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!["en", "es"].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${roboto.variable} ${doto.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Provider>
            <Navbar />
            {children}
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
