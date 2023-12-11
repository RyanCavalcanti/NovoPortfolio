import styles from './Footer.module.scss';
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <p className={styles.text}>2023  <FaCopyright /> Desenvolvido por Ryan Cavalcanti</p>
        </footer>
    )
}

export default Footer;