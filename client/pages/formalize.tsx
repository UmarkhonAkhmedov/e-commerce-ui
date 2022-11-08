import React from "react";
import styles from "../styles/Formalize.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Formalize() {
  const router = useRouter();

  return (
    <div className={styles.formalize}>
      <div className={styles.formalize__header}>
        <p>
          Заявки &gt; <span>Оформить заказ</span>
        </p>
        <h2>Оформить заказ</h2>
        <div className={styles.formalize__search}>
          <input type="search" placeholder="Поиск по названию товара" />
          <button>
            <Image
              src="/img/search__icon.svg"
              alt="Search Icon"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
