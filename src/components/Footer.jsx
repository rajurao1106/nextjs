"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {

const Footer = [
  {
    menu:"Home",  
    link:"/"
  }, 
  {
    menu:"Services", 
    link:"/services" 
  }, 
  {
    menu:"About",  
    link:"/about"
  }, 
  {
    menu:"Contact",    
    link:"/contact"
  },
]

  return (
    <footer className="relative bg-blue-950 text-white pt-12 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold">Pracharkar Solutions</h2>
          <p className="mt-4 text-lg opacity-80 mb-5">
            Elevating brands with innovative advertising strategies and creative
            excellence.
          </p>
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="mt-2 text-md">📧 info@pracharkarsolutions.com</p>
          <p className="mt-2 text-md">📞 +91-8982804998</p>
          <p className="mt-2 text-md">📞 +91-9770142242</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {Footer.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link href={`${item.link}`} className="hover:underline">
                  {item.menu}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-xl font-bold">Office Address</h3>
          <p className="mt-4 text-md">📍 Head Office : Shivanand Nagar sector-1, Khamtari, Raipur, Chhattisgarh</p>
          <p className="mt-4 text-md">📍 Nagpur, Maharashtra </p>
          <p className="mt-4 text-md">📍 Magarpatta, Pune, Maharashtra</p>
          
         
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex mt-4 space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="p-3 bg-gray-800 rounded-full transition-transform hover:scale-110 hover:bg-white hover:text-gray-900"
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon size={20} />
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      {/* <motion.div 
        className="absolute -top-10 left-20 w-16 h-16 bg-blue-700 rounded-full blur-xl"
        animate={{ y: [0, 15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-10 right-32 w-20 h-20 bg-blue-700 rounded-full blur-xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      /> */}

      {/* Copyright */}
      <div className="text-center mt-10  text-sm opacity-80 border-t border-white py-4">
        © {new Date().getFullYear()} <Link href={'https://www.pracharkarsolutions.com'}>Pracharkar Solutions.</Link> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
