import Card from "../components/Card";
import data from "../db.json";

export default function Home() {
    return (
        <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                Raihan's Blogs
            </h1>
            <div>
                {data.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        date={item.date}
                        content={item.content}
                    />
                ))}
            </div>
        </div>
    );
}
