import React from "react";
import styles from "../../styles/AllProducts.module.css";

interface Props {
  index: number;
  setPage: any;
  setStart: any;
  page: any;
}

function Page({ index, setPage, page, setStart }: Props) {
  return (
    <p
      // className={index === page / 10 - 1 && styles.pagination__active}
      key={index}
      onClick={() => {
        setPage((index + 1) * 10);
        setStart((index + 1) * 10 - 10);
      }}
    >
      {index + 1}
    </p>
  );
}

export default Page;
