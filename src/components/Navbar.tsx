import Link from "next/link";
import { useTheme } from "../store/themeStore";

export default function Navbar() {
    const { isDark, toggle } = useTheme();

    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                backgroundColor: "var(--bg)",
                color: "var(--text)",
                borderBottom: "1px solid var(--border)",
            }}
        >
            <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                <h1>Raihan's When to Blog</h1>
            </div>
            <ul
                style={{
                    listStyle: "none",
                    display: "flex",
                    gap: "1rem",
                    margin: 0,
                    padding: 0,
                    alignItems: "center",
                }}
            >
                <li>
                    <Link
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/About"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <button
                        onClick={toggle}
                        style={{
                            cursor: "pointer",
                            background: "var(--text)",
                            color: "var(--bg)",
                            border: "none",
                            padding: "0.25rem 0.5rem",
                            borderRadius: "4px",
                        }}
                    >
                        {isDark ? "Light" : "Dark"}
                    </button>
                </li>
            </ul>
        </nav>
    );
}
