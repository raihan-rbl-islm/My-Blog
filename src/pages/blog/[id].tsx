import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import data from "../../db.json";

export default function BlogPost() {
    const router = useRouter();
    const { id } = router.query;

    const postIndex = id ? parseInt(id as string, 10) : null;
    const post = postIndex !== null ? data[postIndex] : null;

    if (!post) {
        return (
            <>
                <Navbar />
                <div>
                    <h1>Post not found</h1>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "1rem",
                    marginBottom: "1rem",
                }}
            >
                <h1>{post.title}</h1>
                <p>{new Date(post.date).toLocaleDateString()}</p>
                <div>{post.content}</div>
                <div style={{ marginTop: "1rem" }}>
                    <button onClick={() => router.back()}>Go Back</button>
                </div>
            </div>
        </>
    );
}
