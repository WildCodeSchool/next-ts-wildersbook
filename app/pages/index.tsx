import type { NextPage } from "next";
import Wilder from "../components/Wilder";
import { WilderProps } from "../components/Wilder";
import dbConnect from "../lib/dbConnect";
import WilderModel from "../models/WilderModel";

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
  await dbConnect();

  const result = JSON.parse(JSON.stringify(await WilderModel.find()));

  return {
    props: {
      wilders: result,
    },
  };
}
