import { Theme } from "../../common/ThemeContext/types";
import { useThemeContext } from "../../common/ThemeContext/useThemeContext";
import styles from "./ContactStyles.module.css";

function Contact() {
  const { theme, mode } = useThemeContext();

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`${
            mode === Theme.NORMAL
              ? styles.normalButton
              : theme === Theme.LIGHT
              ? "nes-btn is-primary"
              : "nes-btn "
          }`}
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
