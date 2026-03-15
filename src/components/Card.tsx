import React from "react";
import styles from "../styles/Card.module.css";

interface CardProps {
    title: string;
    date: string;
    content: string;
}

export default function Card({ title, date, content }: CardProps) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.date}>{new Date(date).toLocaleDateString()}</p>
            <p className={styles.content}>{content}</p>
        </div>
    );
}
