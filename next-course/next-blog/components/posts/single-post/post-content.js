'use client'
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import styles from "./post-content.module.css";

export default function PostContent(props) {
  const { post } = props;
  
  console.log("Received post in PostContent:", post); // Add this line
  
  if (!post || !post.slug || !post.image) {
    return <div>Error: Invalid post data</div>;
  }

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}