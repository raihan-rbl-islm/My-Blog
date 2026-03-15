import Navbar from "../components/Navbar";
import Card from "../components/Card";
import data from "../db.json";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Raihan's Blogs
                </h1>
                <div>
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            id={index}
                            title={item.title}
                            date={item.date}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
