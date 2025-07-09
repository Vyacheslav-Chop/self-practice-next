import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import "modern-normalize";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Note Hub App",
  description: "Simple and fast app to create and organize your notes.",
  openGraph: {
    title: "Note Hub",
    description: "Simple and fast app to create and organize your notes.",
    url: "https://self-practice-next.vercel.app/",
    siteName: "NoteHub",
    images: [
      {
        url: "/open_graf_img.png",
        width: 1200,
        height: 630,
        alt: "Note Hub Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Note Hub",
    description: "Simple and fast app to create and organize your notes.",
    images: ["/open_graf_img.png"],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const currentDate = new Date().toISOString().split("T")[0];
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <Header />
          <main>
            {children}
            {modal}
          </main>
          <footer>
            <p>
              <time dateTime={currentDate}>{currentDate}</time>
            </p>
          </footer>
        </TanStackProvider>
      </body>
    </html>
  );
}
