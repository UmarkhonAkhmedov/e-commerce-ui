import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Product.module.css";

interface Props {
  id: number;
  img: string;
  name: string;
  price: string;
  discount: boolean;
  refresh: boolean;
  prize: boolean;
}

export default function Product({
  id,
  img,
  name,
  price,
  discount,
  refresh,
  prize,
}: Props) {
  return (
    <Link href={`/info/${id}`}>
      <div className={styles.product}>
        <div className={styles.product__img}>
          <Image
            src={`/img/${img}.svg`}
            alt="Website Logo"
            width={168}
            height={168}
          />
          <div className={styles.productImg__list}>
            {prize == true && (
              <div className={styles.productImg__item}>
                <Image
                  src={`/img/prize__icon.svg`}
                  alt="Discount Logo"
                  width={16}
                  height={16}
                />
              </div>
            )}
            {discount == true && (
              <div className={`${styles.productImg__item} ${styles.discount}`}>
                <Image
                  src={`/img/discount__icon.svg`}
                  alt="Discount Logo"
                  width={16}
                  height={16}
                />
              </div>
            )}
            {refresh == true && (
              <div className={`${styles.productImg__item} ${styles.refresh}`}>
                <Image
                  src={`/img/refresh__icon.svg`}
                  alt="Discount Logo"
                  width={16}
                  height={16}
                />
              </div>
            )}
          </div>
        </div>
        <div className={styles.product__info}>
          <h4>{name}</h4>
          <p className={styles.product__price}>{price} сум </p>
          <div className={styles.product__subinfo}>
            <p>от 2 435 000 сум</p>
            <span>x24</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
