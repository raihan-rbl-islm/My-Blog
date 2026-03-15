import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import data from "../../db.json";
import styles from "../../styles/BlogPost.module.css";

export default function BlogPost() {
    const router = useRouter();
    const { id } = router.query;

    const postIndex = id ? parseInt(id as string, 10) : null;
    const post = postIndex !== null ? data[postIndex] : null;

    if (!post) {
        return (
            <>
                <Navbar />
                <div className={styles.notFound}>
                    <h1>Post not found</h1>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.date}>
                    {new Date(post.date).toLocaleDateString()}
                </p>
                <div className={styles.content}>{post.content}</div>
                <div className={styles.backButtonContainer}>
                    <button
                        onClick={() => router.back()}
                        className={styles.backButton}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </>
    );
}
