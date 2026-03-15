import Link from "next/link";

export default function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
            }}
        >
            <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                <h1>Raihan's When to Blog</h1>
            </div>
            <ul>
                <li style={{ display: "inline", marginRight: "1rem" }}>Home</li>
                <li style={{ display: "inline", marginRight: "1rem" }}>
                    <span>About</span>
                </li>
                <li style={{ display: "inline", marginRight: "1rem" }}>
                    <span>Theme</span>
                </li>
            </ul>
        </nav>
    );
}
