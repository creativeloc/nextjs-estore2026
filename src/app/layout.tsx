import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  // variable: "--font-merriweather",
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800"]
})

export const metadata: Metadata = {
  title: "Fashion eCommerce Website",
  description: "Fashion eCommerce Website Store"
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${roboto.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col" cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  )
}
