import PostContent from '@/components/posts/single-post/post-content'
import { getPostData, getPostsFiles } from '@/lib/posts-util';
import React from 'react'

export default function SinglePostsPage() {
  return (
    <PostContent/>
  )
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
  };
}

export async function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}