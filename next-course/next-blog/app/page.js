import styles from "./page.module.css";
import { Fragment } from "react";
import Hero from "../components/home-page/Hero/hero";
import { getFeaturedPosts } from "@/lib/posts-util";
import FeaturedPosts from "../components/home-page/FeaturedPosts/featured-posts";

export default async function HomePage(props) {
  const featuredPosts = getFeaturedPosts();

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </Fragment>
  );
}
