'use client'
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import styles from "./post-content.module.css";
import Image from "next/image";

export default function PostContent(props) {
  const { post } = props;
    
  if (!post || !post.slug || !post.image) {
    return <div>Error: Invalid post data</div>;
  }

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    image(image){
      <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300}/>
    }
  }

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}