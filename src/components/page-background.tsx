"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const backgrounds = {
  desktop: ["/background1.jpg", "/background1.jpg", "/background4.jpg"],
  mobile: ["/background3.jpg", "/background5.jpg", "/background6.jpg"],
};

export function PageBackground() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const background = pathname === "/" 
    ? (isMobile ? "/background3.jpg" : "/background1.jpg")
    : pathname.startsWith("/quem-somos")
    ? (isMobile ? "/background6.jpg" : "/background4.jpg")
    : (() => {
        const bgArray = isMobile ? backgrounds.mobile : backgrounds.desktop;
        const bgIndex = Math.abs(pathname.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % bgArray.length;
        return bgArray[bgIndex];
      })();

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    />
  );
}
