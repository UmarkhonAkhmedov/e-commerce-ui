import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Link href="/">
          <Image
            src="/img/logo__icon.svg"
            alt="Website Logo"
            width={122}
            height={25}
          />
        </Link>
      </div>
      <div className={styles.navbar__main}>
        <div className={styles.main__notification}>
          <Image
            src="/img/notification__icon.svg"
            alt="Notification Logo"
            width={20}
            height={24}
          />
          <span>1</span>
        </div>
        <div className={styles.main__user}>
          <span>Личный кабинет</span>
          <Image
            src="/img/user__icon.svg"
            alt="User Icon"
            width={32}
            height={32}
          />
        </div>
      </div>
    </div>
  );
}
