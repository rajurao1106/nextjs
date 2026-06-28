// src/app/layout.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Whatsapp from "../components/Whatsapp";
import UnderConstruction from "../components/UnderConstruction";
import ConnectWithUs from "@/components/ConnectWithUs";
import { ThemeProvider } from "../components/theme-context";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

const isUnderConstruction = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5PDZLWJH');
          `}
        </Script>
      </head>

      <body className="flex flex-col min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5PDZLWJH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeProvider>
          <ScrollToTop />
          <Whatsapp />
          <Navbar />

          {isUnderConstruction ? <UnderConstruction /> : children}

          <ConnectWithUs />
          <Footer />
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}