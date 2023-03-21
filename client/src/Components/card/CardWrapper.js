import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { getTypeClass } from "./utils";
import CardWrapper from "./CardWrapper";

const Card = ({ id, name, image, type }) => {
  const typeClass = getTypeClass(type);

  return (
    <div className={style.container}>
      <Link to={`/detail/${id}`}>
        <div className={`${style.element} ${style[typeClass]}`}>
          <h3 className={style.name}>{name}</h3>
          <img src={image} alt={name} className={style.image} />
          <h5 className={style.id}>#{id.toString().padStart(3, "0")}</h5>
        </div>
      </Link>
    </div>
  );
};

const CardList = ({ cards }) => {
  return (
    <CardWrapper>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </CardWrapper>
  );
};

export default CardList;
