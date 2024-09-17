// import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

const Homepage = () => {
  return (
    <main className="h-hero m-10 py-10 px-20 bg-cover bg-center bg-hero">
      <PageNav />
      <section className="flex flex-col h-[85%] items-center justify-center gap-10 text-center">
        <h1 className="text-7xl leading-[1.3]">
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2 className="w-11/12 text-3xl text-light-1 mb-10">
          A world map that tracks your footsteps into every
          city you can think of. Never forget your wonderful
          experiences, and show your friends how you have
          wandered the world.
        </h2>
        <Link
          className="inline-block bg-brand-2 text-dark-1 uppercase text-2xl font-semibold py-4 px-12 rounded-md"
          to="/app"
        >
          Start tracking now
        </Link>
      </section>
    </main>
  );
};

export default Homepage;
