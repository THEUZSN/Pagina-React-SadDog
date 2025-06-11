import styles from './Footer.module.css'
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
return (
<footer className={styles.footer}>Turminha 2DS 2025 ❤
    <div className={styles.icons}>
        <FaInstagram/>
        <FaFacebook/>
        <FaWhatsapp/>
        <FaTwitter/>
        <FaYoutube/>
    </div>
</footer>
)
}
export default Footer