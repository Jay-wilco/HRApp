import styles from "./Footer.module.css";

const Footer = ({ fullName = "Unknown" }) => {
  return (
    <footer className={styles.footer}>
      <h3>
        © {new Date().getFullYear()} {fullName} — REACT25K
      </h3>
    </footer>
  );
};

export default Footer;
