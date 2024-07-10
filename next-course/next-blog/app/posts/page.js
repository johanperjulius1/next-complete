import AllPosts from "@/components/posts/all-posts";
import React from "react";
import { getAllPosts } from "@/lib/posts-util";

// Importerat AllPosts från components/posts/all-posts.js
// hämtar data via getAllPosts från lib/posts-util.js
// och skickar vidare till AllPosts

export default function AllPostsPage() {
  const allPosts = getAllPosts();
  return <AllPosts posts={allPosts}
   />;
}
