import Navbar from "../components/Navbar";
import Card from "../components/Card";
import data from "../db.json";

export default function About() {
    return (
        <>
            <Navbar />
            <div>
                <h1>About Me</h1>
                <p>My name is Raihan.</p>
                <p>
                    I Love <b>Frontend Development</b>.
                </p>
                <p>I don't use any AI assistants for coding anymore</p>
                <p>I drink Horlics every day.</p>
                <p>That's why i am taller stronger and sharper</p>
            </div>
        </>
    );
}
