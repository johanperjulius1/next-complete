import PostContent from "@/components/posts/single-post/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
import React from "react";

export default function SinglePostsPage({ params }) {
  const { slug } = params;

  if (!slug) {
    return <div>Error: Post slug is missing</div>;
  }

  try {
    const postData = getPostData(`${slug}.md`);

    if (!postData) {
      return <div>Error: Post not found</div>;
    }

    return <PostContent post={postData} />;

  } catch (error) {

    return <div>Error: {error.message}</div>;
  }
}

export async function generateStaticParams() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  const params = slugs.map((slug) => ({
    slug: slug,
  }))

  console.log("this is params return", params);
  return params;
}
