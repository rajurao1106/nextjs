"use client"; // Required for App Router if used in Server Component context

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // App Router
// OR import { useRouter } from "next/router"; // Pages Router

export default function useScrollToTop() {
  const pathname = usePathname(); // App Router
  // OR const { pathname } = useRouter(); // Pages Router

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}