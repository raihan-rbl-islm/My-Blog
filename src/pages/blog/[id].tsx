import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import data from "../../db.json";
import React from 'react';

interface BlogPostProps {
  post: typeof data[0];
  builtAt: string;
}

export default function BlogPost({ post, builtAt }: BlogPostProps) {
    const router = useRouter();

    // Fallback page while ISR generates the page
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if (!post) {
        return (
            <div style={{ backgroundColor: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
                <Navbar />
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                    <h1>Post not found</h1>
                </div>
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
            <Navbar />
            <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
                <h1>{post.title}</h1>
                <p style={{ color: "var(--text)", opacity: 0.7 }}>
                    {new Date(post.date).toLocaleDateString()}
                </p>
                <div style={{ marginTop: '2rem', lineHeight: '1.6' }}>
                    {post.content}
                </div>
                
                <p style={{ opacity: 0.6, fontSize: '0.8rem', marginTop: '3rem' }}>
                    Page built at: {builtAt} (ISR: 10s)
                </p>

                <div style={{ marginTop: "2rem" }}>
                    <button 
                        onClick={() => router.back()}
                        style={{ cursor: 'pointer', padding: '0.5rem 1rem' }}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    // Generate paths for all posts in db.json
    const paths = data.map((_, index) => ({
        params: { id: index.toString() },
    }));

    return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id;
    const postIndex = id ? parseInt(id as string, 10) : -1;
    const post = data[postIndex] || null;

    return {
        props: {
            post,
            builtAt: new Date().toLocaleTimeString(),
        },
        revalidate: 10, // Re-generate page every 10 seconds
    };
};
