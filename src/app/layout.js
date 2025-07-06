import "@/app/globals.css";
import { Roboto, Work_Sans } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto"
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${workSans.variable}`}>{children}</body>
    </html>
  )
}