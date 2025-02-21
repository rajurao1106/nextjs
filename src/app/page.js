// pages/_app.jsx
import "./globals.css"; // Import global styles (if any)
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import ScrollToTop from "../components/ScrollToTop";
import UseScrollToTop from "../components/useScrollToTop";
import Homepage from "./homepage/Homepage/Homepage";

const isUnderConstruction = false;

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Homepage />
    </div>
  );
}
