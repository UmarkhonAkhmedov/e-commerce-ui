import React from "react";
import styles from "../../styles/Sidebar.module.css";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SidebarItem img="home" text="Главная" link="" />
      <SidebarItem img="note" text="Заказы" link="order" />
      <SidebarItem img="bag" text="Товары" link="product" />
      <SidebarItem img="star" text="Отзывы" link="comment" />
      <SidebarItem img="box" text="Оформить заказ" link="formalize" />
    </div>
  );
}
