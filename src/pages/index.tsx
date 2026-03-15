import Navbar from "../components/Navbar";
import Card from "../components/Card";
import data from "../db.json";

export default function Home() {
    return (
        <>
            <Navbar />
            <div>
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
