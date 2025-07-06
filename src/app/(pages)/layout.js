import "@/app/globals.css";
import Navbar from "@/shared/Navbar/Navbar";
import Footer from "@/shared/Footer/Footer";export default function PagesLayout({ children }) {
  return (
    <>
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
    </>
  )
}