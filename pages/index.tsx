import type { NextPage } from "next";
import Wilder from "../components/Wilder";

const Home: NextPage = () => {
  const wilders = [
    { name: "John" },
    { name: "Paul" },
    { name: "George" },
    { name: "Ringo" },
  ];
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
          <Wilder name={wilders[0].name} />
          <Wilder name={wilders[1].name} />
          <Wilder name={wilders[2].name} />
          <Wilder name={wilders[3].name} />
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
