import Link from "next/link";

interface CardProps {
    id: number;
    title: string;
    date: string;
    content: string;
}

export default function Card({ id, title, date, content }: CardProps) {
    return (
        <Link
            href={`/blog/${id}`}
            style={{ textDecoration: "none", color: "inherit" }}
        >
            <div
                style={{
                    border: "1px solid var(--border)",
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                    padding: "1rem",
                    marginBottom: "1rem",
                    borderRadius: "8px",
                }}
            >
                <h2>{title}</h2>
                <p style={{ color: "var(--text)", opacity: 0.7 }}>
                    {new Date(date).toLocaleDateString()}
                </p>
            </div>
        </Link>
    );
}
