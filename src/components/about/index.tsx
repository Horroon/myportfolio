import React from "react";
import { ItemFace } from "./interface";
import Item from "./item";
import styles from "./style.module.scss";

interface AboutMainFace {
  Items: Array<ItemFace>;
}
export const AboutMain: React.FC<AboutMainFace> = ({ Items }): JSX.Element => (
  <div className={`row ${styles["hm-rw-2"]}`}>
    {Items.map((item, i) => (
      <Item
        title={item.title}
        desc={item.desc}
        iconClass={item.iconClass}
        key={i}
        pathurl={item.pathurl}
      />
    ))}
  </div>
);
