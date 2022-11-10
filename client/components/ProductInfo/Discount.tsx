import Image from "next/image";
import React from "react";
import styles from "../../styles/Discount.module.css";

interface Props {
  img: string;
  title: string;
  subTitle: string;
}

export default function Discount({ img, title, subTitle }: Props) {
  return (
    <div className={styles.discount}>
      <div className={styles.discount__info}>
        {img === "refresh" && (
          <div className={`${styles.img__item} ${styles.refresh}`}>
            <Image
              src={`/img/${img}__icon.svg`}
              alt=""
              width={16}
              height={16}
            />
          </div>
        )}
        {img === "discount__green" && (
          <div className={`${styles.img__item} ${styles.discount__green}`}>
            <Image
              src={`/img/${img}__icon.svg`}
              alt=""
              width={16}
              height={16}
            />
          </div>
        )}
        {img === "prize" && (
          <div className={`${styles.img__item} ${styles.prize}`}>
            <Image
              src={`/img/${img}__icon.svg`}
              alt=""
              width={16}
              height={16}
            />
          </div>
        )}
        <div className={styles.discount__heading}>
          <h5>{title}</h5>
          <p>{subTitle}</p>
        </div>
      </div>
      <input type="checkbox" />
    </div>
  );
}
