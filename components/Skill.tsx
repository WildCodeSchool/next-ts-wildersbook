export interface SkillProps {
  name: string;
  votes: number;
}

const Skill = ({ name, votes }: SkillProps) => {
  return (
    <li>
      HTML
      <span className="votes">3</span>
    </li>
  );
};

export default Skill;
