import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useTheme } from "../store/themeStore";

export default function App({ Component, pageProps }: AppProps) {
    const isDark = useTheme((state) => state.isDark);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            document.documentElement.setAttribute(
                "data-theme",
                isDark ? "dark" : "light",
            );
        }
    }, [isDark, mounted]);

    if (!mounted) {
        return null;
    }

    return <Component {...pageProps} />;
}
