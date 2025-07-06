import "@/app/globals.css";
import { Roboto, Work_Sans } from "next/font/google";

export const metadata = {
    title: {
        default: "Next Demo | Learn NextJS",
        template: "%s | Next Demo"
    },
    descrition: "It's a demo website build using NextJS for learning.",
    keywords: ['React', 'Next.js', 'Web Development', 'MERN Stack', 'Full Stack'],
    icons: {
        icon: '/logo.webp'
    },
    metadataBase: new URL ("https://www.honeygain.com"),
    openGraph: {
        title: "NextJS Demo",
        description: "Join the best web dev community",
        url: "https://www.honeygain.com",
        siteName: "NextJS Demo",
        images: [
            {
                url: '/logo.webp',
                width: 1200,
                height: 630,
                alt: "NextJS Demo Logo"
            },
        ],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "NextJS Demo",
        description: "Learn NextJS with our pro community",
        creator: "@walidurtanjim",
        images: ['/logo.webp']
    }
}

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