import PostContent from '@/components/posts/single-post/post-content'
import { getPostData, getPostsFiles } from '@/lib/posts-util';
import React from 'react'

export default function SinglePostsPage({ params }) {
  const { slug } = params;
  
  console.log("Received slug:", slug); // Add this line

  if (!slug) {
    return <div>Error: Post slug is missing</div>;
  }
  
  try {
    const postData =  getPostData(`${slug}.md`);
    
    console.log("Post data:", postData); // Add this line
    
    if (!postData) {
      return <div>Error: Post not found</div>;
    }

    return <PostContent post={postData} />
  } catch (error) {
    console.error("Error fetching post data:", error); // Add this line
    return <div>Error: {error.message}</div>;
  }
}

export async function generateStaticParams() {
  const postFilenames = getPostsFiles();
  console.log("Post filenames:", postFilenames); // Add this line
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return slugs.map((slug) => ({
    slug: slug,
  }));
}