import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  title: "CodeBattle With Ajay - Master Dsa, FullStack Developement & Devops",
  description: "Learn DevOps, Cloud Computing, and Programming through practical tutorials and real-world projects. Free courses on Docker, Kubernetes, AWS, Ansible, and more.",
  keywords: ["DevOps", "Cloud Computing", "Programming", "Docker", "Kubernetes", "AWS", "Ansible", "Free Courses", "Tutorials"],
  authors: [{ name: "CodeBattle" }],
  creator: "CodeBattle",
  publisher: "CodeBattle Learning",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codebattlewithajay.vercel.com",
    title: "CodeBattle With Ajay - Master Dsa, FullStack Developement & Devops",
    description: "Learn DevOps, Cloud Computing, and Programming through practical tutorials and real-world projects.",
    siteName: "CodeBattle Learning",
    images: [{ url: "/logo.png", width: 1254, height: 1254, alt: "CodeBattle With Ajay" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeBattle With Ajay - Master Dsa, FullStack Developement & Devops",
    description: "Learn DevOps, Cloud Computing, and Programming through practical tutorials and real-world projects.",
    creator: "@codebattle",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 antialiased`}>
        <div className="min-h-[100dvh] flex flex-col overflow-x-clip">
          <Header />
          <main className="flex-1 w-full min-w-0 pb-2">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
