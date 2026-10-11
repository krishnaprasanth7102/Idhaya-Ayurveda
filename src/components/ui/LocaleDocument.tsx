"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export function LocaleDocument() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const locale = pathname.split("/")[1];
    document.documentElement.lang = locale === "ml" ? "ml" : "en";
  }, [pathname]);

  return null;
}
