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
import CV from "../../assets/Jose Bracho - Front End Developer.pdf";
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
        <h2>Frontend Developer</h2>
        <span>
          {/* TODO: modify links */}
          <a href="https://twitter.com/" target="_blank">
            {mode === Theme.NORMAL ? (
              <img src={twitterIcon} alt="Twitter icon" />
            ) : (
              <i className="nes-icon twitter"></i>
            )}
          </a>
          <a href="https://github.com/" target="_blank">
            {mode === Theme.NORMAL ? (
              <img src={githubIcon} alt="Github icon" />
            ) : (
              <i className="nes-icon github"></i>
            )}
          </a>
          <a href="https://linkedin.com/" target="_blank">
            {mode === Theme.NORMAL ? (
              <img src={linkedinIcon} alt="Linkedin icon" />
            ) : (
              <i className="nes-icon linkedin"></i>
            )}
          </a>
        </span>
        <p className={styles.description}>
          Dynamic and innovative Front End Developer skilled in designing and
          implementing high-quality, responsive web applications.
        </p>
        <a href={CV} download>
          <button
            className={`${
              mode === Theme.NORMAL
                ? styles.normalButton
                : theme === Theme.LIGHT
                ? "nes-btn is-primary"
                : "nes-btn "
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
