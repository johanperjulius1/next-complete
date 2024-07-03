import styles from "./page.module.css";
import { Fragment } from "react";
import Hero from "../components/home-page/Hero/hero";
import { getFeaturedPosts } from "@/lib/posts-util";
import FeaturedPosts from "../components/home-page/FeaturedPosts/featured-posts";

export default function HomePage(props) {

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}


export function getMarkdownFile() { 
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    }
  }
}