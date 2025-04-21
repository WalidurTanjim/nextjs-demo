import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarPage from "./(common)/Navbar/page";
import FooterPage from "./(common)/Footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "NextJS Demo",
    template: "%s | NextJS Demo"
  },
  description: "Trying to learn NextJS as best as we can",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* navbar */}
        <NavbarPage />

        <main>
          {children}
        </main>

        {/* footer */}
        <FooterPage />
      </body>
    </html>
  );
}
