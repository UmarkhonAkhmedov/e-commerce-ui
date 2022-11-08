import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Sidebar.module.css";
import { useRouter } from "next/router";

interface Props {
  img: string;
  text: string;
  link: string;
}

export default function SidebarItem({ img, text, link }: Props) {
  const router = useRouter();

  return (
    <Link href={`/${link}`}>
      <div
        className={
          router.pathname !== `/${link}`
            ? styles.sidebarItems
            : styles.sidebarItemsDark
        }
      >
        {router.pathname !== `/${link}` ? (
          <Image
            src={`/img/${img}__icon.svg`}
            alt="Website Logo"
            width={20}
            height={20}
          />
        ) : (
          <Image
            src={`/img/${img}__dark__icon.svg`}
            alt="Website Logo"
            width={20}
            height={20}
          />
        )}

        <span>{text}</span>
      </div>
    </Link>
  );
}
