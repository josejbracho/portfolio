interface SkillListProps {
  src: string;
  skill: string;
}

function SkillList({ src, skill }: SkillListProps) {
  return (
    <span>
      <img src={src} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
