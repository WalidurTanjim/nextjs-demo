import "./globals.css";
import Navbar from "@/shared/Navbar/Navbar";
import Footer from "@/shared/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}