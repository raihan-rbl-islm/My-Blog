import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>MyBlog</div>
            <ul className={styles.links}>
                <li>
                    <span className={styles.link}>Home</span>
                </li>
                <li>
                    <span className={styles.link}>About</span>
                </li>
                <li>
                    <span className={styles.link}>Theme</span>
                </li>
            </ul>
        </nav>
    );
}
