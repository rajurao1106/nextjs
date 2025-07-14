// src/app/layout.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Whatsapp from "../components/Whatsapp";
import UnderConstruction from "../components/UnderConstruction"; 
import "./globals.css"; 
import ConnectWithUs from "@/components/ConnectWithUs";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { ThemeProvider } from "../components/theme-context";
import { Analytics } from "@vercel/analytics/react"

const isUnderConstruction = false; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          {/* <ScrollProgressBar /> */}
          <ScrollToTop />
          <Whatsapp />
          <Navbar />  {/* ✅ Now inside ThemeProvider */}
          {isUnderConstruction ? <UnderConstruction /> : children}
          <ConnectWithUs />
          <Footer />
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  );
}
