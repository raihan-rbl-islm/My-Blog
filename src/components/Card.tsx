import Link from "next/link";
import styles from "../styles/Card.module.css";

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
            <div className={styles.card}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.date}>
                    {new Date(date).toLocaleDateString()}
                </p>
                {/* <p className={styles.content}>{content}</p> */}
            </div>
        </Link>
    );
}
