import { FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Denis Portfolio</p>

      <div className="socials">
        <a
          href="https://github.com/DenisVoytenko1001"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://t.me/"
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegram />
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;