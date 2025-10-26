import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], });

export const metadata = {
  title: "Probity Accountants",
  description:
    "Trusted accounting, auditing, and tax services for businesses and individuals. Empower your financial decisions with expert support.",
  keywords: ["accounting", "bookkeeping", "audit", "finance", "tax services"],

 
  icons: {
    icon: "/images/logo/logo2.png", 
  },

  openGraph: {
    title: "Probity Accountants",
    description:
      "Trusted accounting, auditing, and tax services for businesses and individuals.",
    url: "https://probityaccountants.com",
    images: [
      {
        url: "/images/logo/logo2.png",
        width: 1200,
        height: 630,
        alt: "Accounting team discussing reports",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="light"
        >
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
