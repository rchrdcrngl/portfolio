import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import localFont from 'next/font/local'

const clashDisplay = localFont({
  src: [
    {path:'../fonts/ClashDisplay-Variable.woff2', style:'normal', weight:'400'},
    {path:'../fonts/ClashDisplay-Bold.woff2', style:'normal', weight:'700'}
  ],
  display: 'swap',
  variable: '--font-clash-display',
  
})

const archivo = localFont({
  src: [
    {path:'../fonts/Archivo-Variable.woff2', style:'normal', weight:'400'},
    {path:'../fonts/Archivo-Bold.woff2', style:'normal', weight:'700'}
  ],
  display: 'swap',
  variable: '--font-archivo',
})

export const metadata = {
  title: "Richard Maru Caringal",
  description: "Richard Maru is a Computer Science senior at the University of Santo Tomas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`!scroll-smooth ${clashDisplay.variable} ${archivo.className}`}>
      <body
        className={`${archivo.className} bg-gray-50 text-gray-950 relative  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            {/* <Toaster /> */}
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
