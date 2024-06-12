import React from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getMeal, getAllMealSlugs } from "@/lib/meals";

// This function is used to generate the paths for static site generation
export async function generateStaticParams() {
  const mealSlugs = await getAllMealSlugs(); // Fetch all meal slugs from the database
  return mealSlugs.map((slug) => ({ mealSlug: slug }));
}

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    // calls closest error or notFound page
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    // calls closest error or notFound page
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br>");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
