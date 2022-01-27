export interface SkillProps {
  name: string;
  votes: number;
}

const Skill = ({ name, votes }: SkillProps) => {
  return (
    <li>
      {name}
      <span className="votes">{votes}</span>
    </li>
  );
};

export default Skill;
