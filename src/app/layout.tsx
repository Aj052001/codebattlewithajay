import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeBattle With Ajay - Master Dsa, FullStack Developement & Devops",
    description: "Learn DevOps, Cloud Computing, and Programming through practical tutorials and real-world projects.",
    creator: "@codebattle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
