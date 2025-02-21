// src/app/layout.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Whatsapp from "../components/Whatsapp";
import UnderConstruction from "../components/UnderConstruction"; // New import
import "./globals.css"; // Adjusted path

const isUnderConstruction = true; // Toggle this to true/false

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Whatsapp />
        <Navbar />
        <main className="flex-grow">
          {isUnderConstruction ? <UnderConstruction /> : children}
        </main>
        <Footer />
      </body>
    </html>
  );
}