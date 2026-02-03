import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import { useThemeContext } from "../../common/ThemeContext/useThemeContext";
import SkillList from "../../common/SkillList";
import {
  BACKEND_SKILLS,
  DATA_SKILLS,
  DEVOPS_SKILLS,
  FRONTEND_SKILLS,
} from "./constants";
import { Theme } from "../../common/ThemeContext/types";

function Skills() {
  const { theme } = useThemeContext();
  const checkMarkIcon =
    theme === Theme.LIGHT ? checkMarkIconLight : checkMarkIconDark;

  const FrontendSkills = FRONTEND_SKILLS.map((skill) => {
    return <SkillList key={skill} src={checkMarkIcon} skill={skill} />;
  });

  const BackendSkills = BACKEND_SKILLS.map((skill) => {
    return <SkillList key={skill} src={checkMarkIcon} skill={skill} />;
  });

  const DataSkills = DATA_SKILLS.map((skill) => {
    return <SkillList key={skill} src={checkMarkIcon} skill={skill} />;
  });

  const DevOpsSkills = DEVOPS_SKILLS.map((skill) => {
    return <SkillList key={skill} src={checkMarkIcon} skill={skill} />;
  });

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>{FrontendSkills}</div>
      <hr />
      <div className={styles.skillList}>{BackendSkills}</div>
      <hr />
      <div className={styles.skillList}>{DataSkills}</div>
      <hr />
      <div className={styles.skillList}>{DevOpsSkills}</div>
    </section>
  );
}

export default Skills;
