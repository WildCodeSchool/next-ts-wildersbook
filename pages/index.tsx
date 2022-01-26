import type { NextPage } from "next";
import Image from "next/image";
import blankProfile from "../public/blank-profile-picture-female.png";
import Skill from "../components/Skill";
import Wilder from "../components/Wilder";

const Home: NextPage = () => {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          <Wilder />
          <Wilder />
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
