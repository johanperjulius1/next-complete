import AllPosts from "@/components/posts/all-posts";
import React from "react";
import { getAllPosts } from "@/lib/posts-util";



export default function AllPostsPage() {
  const allPosts = getAllPosts();
  return <AllPosts posts={allPosts}
   />;
}
