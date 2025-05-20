"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Preloader from "../Preloader/Preloader";
import { ThemeProvider } from "@/context/ThemeContext/ThemeContext";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return loading ? <Preloader /> : <ThemeProvider>{children}</ThemeProvider>;
}
