import React from "react";
import { dummyData } from "../dummyData";
import styles from "../../styles/AllProducts.module.css";
import Product from "./Product";

export default function AllProducts() {
  const data = dummyData;

  return (
    <div className={styles.allProducts}>
      <h3>Все товары ({data.length})</h3>
      <div className={styles.allProducts__list}>
        {data.map((item) => (
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
    </div>
  );
}
