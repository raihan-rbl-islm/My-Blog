import Navbar from "../components/Navbar";
import { GetStaticProps } from "next";

interface AboutProps {
    name: string;
    bio: string;
    facts: string[];
    builtAt: string;
}

export default function About({ name, bio, facts, builtAt }: AboutProps) {
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
                <h1>About Me</h1>
                <p>
                    My name is <strong>{name}</strong>.
                </p>
                <p>{bio}</p>
                <ul style={{ lineHeight: "1.8" }}>
                    {facts.map((fact, index) => (
                        <li key={index}>{fact}</li>
                    ))}
                </ul>
                <p
                    style={{
                        opacity: 0.6,
                        fontSize: "0.8rem",
                        marginTop: "2rem",
                    }}
                >
                    Page built at: {builtAt}
                </p>
            </div>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            name: "Raihan",
            bio: "I Love Frontend Development. I don't use any AI assistants for coding anymore.",
            facts: [
                "I drink Horlics every day.",
                "That's why I am taller, stronger, and sharper.",
            ],
            builtAt: new Date().toLocaleTimeString(),
        },
    };
};
