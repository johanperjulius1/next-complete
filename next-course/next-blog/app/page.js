import Image from "next/image";
import styles from "./page.module.css";
import { Fragment } from "react";
import Hero from '../components/home-page/Hero/hero'

export default function HomePage() {
  return (
    <Fragment>
      <Hero/>
    </Fragment>
  );
}
