import Image from "next/image";
import styles from "./page.module.css";
import { Fragment } from "react";
import Hero from "../components/home-page/Hero/hero";
import FeaturedPosts from "@/components/home-page/FeaturedPosts/featured-posts";

export default function HomePage() {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs-2",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs-3",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs-4",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
      date: "2022-02-10",
    },
  ];
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}
