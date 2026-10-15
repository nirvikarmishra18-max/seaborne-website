import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import "./globals.css";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", axes: ["opsz"] });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400"] });

export const metadata = {
  title: {
    default: "Seaborne International | Marine & Offshore Solutions",
    template: "%s | Seaborne International",
  },
  description:
    "Seaborne International is a maritime and offshore solutions provider specializing in Marine & Offshore services, resource management, technical support, drydocking and vessel Sale & Purchase (S&P).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
