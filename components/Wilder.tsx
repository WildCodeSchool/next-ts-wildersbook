import blank_profile from "../public/blank-profile-picture-female.png";
import Image from "next/image";
import Skill, { SkillProps } from "./Skill";

export interface WilderProps {
  name: string;
  skills: Array<SkillProps>;
}

function Wilder({ name, skills }: WilderProps) {
  return (
    <article className="card">
      <Image src={blank_profile} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((el) => (
          <Skill name={el.name} votes={el.votes} />
        ))}
      </ul>
    </article>
  );
}

export default Wilder;
