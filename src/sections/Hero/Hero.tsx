import styles from "./HeroStyles.module.css";
import normalHeroImg from "../../assets/hero-img.png";
import pixelHeroImg from "../../assets/hero-img-pixel.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Jose_Javier_Bracho_-_Full_Stack_Software_Engineer.pdf";
import { useThemeContext } from "../../common/ThemeContext/useThemeContext";
import { Theme } from "../../common/ThemeContext/types";
import { NormalIcon } from "../../assets/icons/NormalIcon";
import { PixelIcon } from "../../assets/icons/PixelIcon";

function Hero() {
  const { theme, toggleTheme, mode, toggleMode } = useThemeContext();

  const themeIcon = theme === Theme.LIGHT ? sun : moon;
  const svgFill = theme === Theme.LIGHT ? "#222" : "#fff";
  const modeIcon =
    mode === Theme.NORMAL ? (
      <NormalIcon
        fill={svgFill}
        className={`${styles.mode} nes-pointer`}
        onClick={toggleMode}
      />
    ) : (
      <PixelIcon
        fill={svgFill}
        className={`${styles.mode} nes-pointer`}
        onClick={toggleMode}
      />
    );
  const twitterIcon = theme === Theme.LIGHT ? twitterLight : twitterDark;
  const githubIcon = theme === Theme.LIGHT ? githubLight : githubDark;
  const linkedinIcon = theme === Theme.LIGHT ? linkedinLight : linkedinDark;
  const heroImg = mode === Theme.NORMAL ? normalHeroImg : pixelHeroImg;

  return (
    <section id="hero" className={styles.container}>
      <div
        className={`${styles.themeModeContainer} ${
          mode === Theme.NORMAL && styles.normalHover
        }`}
      >
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Jose Bracho"
        />
        <img
          className={`${styles.theme} nes-pointer`}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
        {modeIcon}
      </div>
      <div className={styles.info}>
        <h1>
          Jose
          <br />
          Bracho
        </h1>
        <h2>Full Stack Software Engineer</h2>
        <span>
          <a href="https://x.com/jaybracho" target="_blank">
            {mode === Theme.NORMAL ? (
              <img src={twitterIcon} alt="Twitter icon" />
            ) : (
              <i className="nes-icon twitter"></i>
            )}
          </a>
          <a href="https://github.com/josejbracho" target="_blank">
            {mode === Theme.NORMAL ? (
              <img src={githubIcon} alt="Github icon" />
            ) : (
              <i className="nes-icon github"></i>
            )}
          </a>
          <a href="hhttps://www.linkedin.com/in/josejbracho/" target="_blank">
            {mode === Theme.NORMAL ? (
              <img src={linkedinIcon} alt="Linkedin icon" />
            ) : (
              <i className="nes-icon linkedin"></i>
            )}
          </a>
        </span>
        <p className={styles.description}>
        Full-stack software engineer focused on building scalable, data-driven applications and internal tools that help teams make better decisions.
        </p>
        <a href={CV} download>
          <button
            className={`${
              mode === Theme.NORMAL
                ? styles.normalButton
                : theme === Theme.LIGHT
                ? "nes-btn is-primary"
                : "nes-btn"
            }`}
          >
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
