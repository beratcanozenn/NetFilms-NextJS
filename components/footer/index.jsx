import React from "react";
import Link from "next/link";

import styles from "./styles.modules.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="/">Berat Can Özen</Link>
    </footer>
  );
};

export default Footer;
