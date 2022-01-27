import type { NextPage } from "next";
import Wilder from "../components/Wilder";
import { WilderProps } from "../components/Wilder";

const Home: NextPage<{ wilders: WilderProps[] }> = ({
  wilders,
}: {
  wilders: WilderProps[];
}) => {
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
          {wilders.map((el) => (
            <Wilder name={el.name} skills={el.skills} />
          ))}
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

export async function getServerSideProps() {
  return {
    props: {
      wilders: [
        {
          name: "John",
          skills: [
            { name: "HTML", votes: 3 },
            { name: "JS", votes: 2 },
          ],
        },
        {
          name: "Paul",
          skills: [
            { name: "PHP", votes: 6 },
            { name: "Symfony", votes: 2 },
          ],
        },
        {
          name: "George",
          skills: [
            { name: "HTML", votes: 3 },
            { name: "CSS", votes: 2 },
          ],
        },
        {
          name: "Ringo",
          skills: [
            { name: "React", votes: 3 },
            { name: "NextJS", votes: 2 },
          ],
        },
      ],
    },
  };
}
