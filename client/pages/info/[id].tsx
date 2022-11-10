import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Info.module.css";
import style from "../../styles/Formalize.module.css";
import { dummyData } from "../../components/dummyData";
import Image from "next/image";
import Discount from "../../components/ProductInfo/Discount";
import Link from "next/link";

export default function ItemInfo() {
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(0);
  const router = useRouter();
  const { id } = router.query;
  const filterData = dummyData.filter((item: any) => item.id == id);

  return (
    <div className={style.formalize}>
      <p className={styles.info__text}>
        Заявки &gt; Оформить заказ &gt; <span>{filterData[0].name}</span>
      </p>
      <div className={styles.info}>
        <div className={styles.info__box}>
          <Image
            src={`/img/box__red--icon.svg`}
            alt="Box Red Icon"
            width={24}
            height={24}
          />
        </div>
        <h2>{filterData[0].name}</h2>
        <div className={styles.info__main}>
          <div className={styles.info__img}>
            <Image
              className={styles.info__img__main}
              src={`/img/${filterData[0].img}.svg`}
              alt="Box Red Icon"
              width={270}
              height={270}
            />
            <div className={styles.img__list}>
              {filterData[0].prize == true && (
                <div className={styles.img__item}>
                  <Image
                    src={`/img/prize__icon.svg`}
                    alt="Discount Logo"
                    width={16}
                    height={16}
                  />
                </div>
              )}
              {filterData[0].discount == true && (
                <div className={`${styles.img__item} ${styles.discount}`}>
                  <Image
                    src={`/img/discount__icon.svg`}
                    alt="Discount Logo"
                    width={16}
                    height={16}
                  />
                </div>
              )}
              {filterData[0].refresh == true && (
                <div className={`${styles.img__item} ${styles.refresh}`}>
                  <Image
                    src={`/img/refresh__icon.svg`}
                    alt="Discount Logo"
                    width={16}
                    height={16}
                  />
                </div>
              )}
              <div className={`${styles.img__item} ${styles.discount__green}`}>
                <Image
                  src={`/img/discount__green.svg`}
                  alt="Discount Logo"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>
          <div className={styles.img__info}>
            <h5>Цена телефона</h5>
            <p>{filterData[0].price} сум</p>
            <div className={styles.divider}></div>
            <div className={styles.img__price}>
              <div>
                <h5>Общая цена (с наценкой)</h5>
                <p>8 000 000 сум </p>
              </div>
              <div className={styles.img__price__red}>
                <p>2 666 666 сум</p>
                <span>x3</span>
              </div>
            </div>
            <div className={styles.calculate__price}>
              {[...Array(4)].map((item: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setNum(index)}
                  className={index === num ? styles.active__button : ""}
                >
                  {(index + 1) * 3} мес
                </button>
              ))}
            </div>
            <p className={styles.info__percent}>
              Наценка: <span>5%</span>
            </p>
            <div className={styles.divider}></div>
            <h5>Общие характеристики</h5>
            <p className={styles.info__feature}>Тип: моноблок (классический)</p>
            <p className={styles.info__feature}>
              Стандарт: 2G, 3G, 4G (LTE), 5G
            </p>
            <p className={styles.info__feature}>Операционная система: iOS 14</p>
            <div className={styles.show__button}>
              <button onClick={() => setShow(!show)}>Показать все</button>
              <Image
                src="/img/button__arrow.svg"
                width={7}
                height={13}
                alt="Icon"
              />
            </div>
            {show && (
              <div className={styles.show__other}>
                <p className={styles.info__feature}>Other Features</p>
                <p className={styles.info__feature}>Other Features</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.info__bottom}>
          <h3>Акции</h3>
          {filterData[0].refresh == true && (
            <>
              <Discount
                img="refresh"
                title="Обменяй свой старый айфон и получи скидку на новый"
                subTitle="- 400 000 сум"
              />
              <div className={styles.divider}></div>
            </>
          )}
          {filterData[0].discount && (
            <>
              <Discount
                img="prize"
                title="Наушники в подарок"
                subTitle="Apple EarPods"
              />
              <div className={styles.divider}></div>
            </>
          )}
          {filterData[0].discount && (
            <>
              <Discount
                img="discount"
                title="Скидка 20% на смартфоны"
                subTitle="-10 000 сум"
              />
              <div className={styles.divider}></div>
            </>
          )}

          <Discount
            img="discount__green"
            title="Скидка на айфоны"
            subTitle="- 10 000 сум"
          />
          <Link href="/formalize">
            <button className={styles.info__submit}>Добавить в корзину</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
