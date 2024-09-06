import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import { useThemeContext } from "../../common/ThemeContext/useThemeContext";
import SkillList from "../../common/SkillList";
import { ADVANCED_SKILLS, BASIC_SKILLS, TECHS } from "./constants";
import { Theme } from "../../common/ThemeContext/types";

function Skills() {
  const { theme } = useThemeContext();
  const checkMarkIcon =
    theme === Theme.LIGHT ? checkMarkIconLight : checkMarkIconDark;

  const BasicSkills = BASIC_SKILLS.map((skill) => {
    return <SkillList src={checkMarkIcon} skill={skill} />;
  });

  const Techs = TECHS.map((skill) => {
    return <SkillList src={checkMarkIcon} skill={skill} />;
  });

  const AdvancedSkills = ADVANCED_SKILLS.map((skill) => {
    return <SkillList src={checkMarkIcon} skill={skill} />;
  });

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>{BasicSkills}</div>
      <hr />
      <div className={styles.skillList}>{Techs}</div>
      <hr />
      <div className={styles.skillList}>{AdvancedSkills}</div>
    </section>
  );
}

export default Skills;
