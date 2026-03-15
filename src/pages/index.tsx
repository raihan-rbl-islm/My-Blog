import Navbar from "../components/Navbar";
import Card from "../components/Card";
import data from "../db.json";
import { GetServerSideProps } from "next";

interface HomeProps {
    posts: typeof data;
    renderedAt: string;
}

export default function Home({ posts, renderedAt }: HomeProps) {
    return (
        <div
            style={{
                backgroundColor: "var(--bg)",
                color: "var(--text)",
                minHeight: "100vh",
            }}
        >
            <Navbar />
            <div
                style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}
            >
                <h1 style={{ textAlign: "center" }}>Raihan's Blogs</h1>
                <p
                    style={{
                        textAlign: "center",
                        opacity: 0.6,
                        fontSize: "0.8rem",
                    }}
                >
                    Rendered at: {renderedAt}
                </p>

                <div style={{ marginTop: "2rem" }}>
                    {posts.map((item, index) => (
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
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const renderedAt = new Date().toLocaleTimeString();

    return {
        props: {
            posts: data,
            renderedAt,
        },
    };
};
