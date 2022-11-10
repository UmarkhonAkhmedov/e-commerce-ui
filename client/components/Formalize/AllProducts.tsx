import React, { useState } from "react";
import { dummyData } from "../dummyData";
import styles from "../../styles/AllProducts.module.css";
import Product from "./Product";
import Image from "next/image";

export default function AllProducts() {
  const [page, setPage] = useState(10);
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(false);
  const data = dummyData;

  return (
    <div className={styles.allProducts}>
      <h3>Все товары ({data.length})</h3>
      {loading === false ? (
        <div className={styles.allProducts__list}>
          {data.slice(start, page).map((item) => (
            <Product
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              discount={item.discount}
              refresh={item.refresh}
              prize={item.prize}
              price={item.price}
            />
          ))}
        </div>
      ) : (
        <div className={styles.loading}>Loading...</div>
      )}

      <div className={styles.pagination}>
        <Image
          src="/img/page__right.svg"
          alt="Left Icon"
          width={11}
          height={20}
          onClick={() => {
            if (start === 0) {
              setStart(0);
              setPage(10);
            } else {
              setLoading(true);
              setStart(start - 10);
              setPage(page - 10);
            }
            setTimeout(() => {
              setLoading(false);
            }, 500);
          }}
        />
        <div className={styles.pagination__list}>
          {[...Array(data.length / 10)].map((item: any, index: number) => (
            <p
              className={index === page / 10 - 1 && styles.pagination__active}
              key={index}
              onClick={() => {
                setLoading(true);
                setPage((index + 1) * 10);
                setStart((index + 1) * 10 - 10);
                setTimeout(() => {
                  setLoading(false);
                }, 500);
              }}
            >
              {index + 1}
            </p>
          ))}
        </div>
        <Image
          src="/img/page__left.svg"
          alt="Left Icon"
          width={11}
          height={20}
          onClick={() => {
            if (page === data.length) {
              setStart(data.length - 10);
              setPage(data.length);
            } else {
              setLoading(true);
              setStart(start + 10);
              setPage(page + 10);
            }
            setTimeout(() => {
              setLoading(false);
            }, 500);
          }}
        />
      </div>
    </div>
  );
}
