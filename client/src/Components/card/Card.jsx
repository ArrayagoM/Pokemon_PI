import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { getTypeClass } from "./utils";

const Card = ({ id, name, image, type }) => {

  const splitTypes = (types) => {
    const mid = Math.ceil(types.length / 2);
    return [types.slice(0, mid), types.slice(mid)];
  }
  const typesArray = type.split(",");
  const [types1, types2] = splitTypes(typesArray);

  const typeClass = getTypeClass(type);
  const typeClass1 = getTypeClass(types1);
  const typeClass2 = getTypeClass(types2);

  return (
    <div className={style.container}>
      <Link to={`/detail/${id}`}>
      <div className={`${style.element} ${style[typeClass]}`}>
        <h3 className={style.name}>{name}</h3>
        <img src={image} alt={name} className={style.image} />
        <div className={style.typeContainer}>
          <h6 className={`${style.types1} ${style[typeClass1]}`}>{types1}</h6>
          <h6 className={`${style.types2} ${style[typeClass2]}`}>{types2}</h6>
        </div>
        <h5 className={style.id}>#{id.toString().padStart(3, "0")}</h5>
      </div>
      </Link>
    </div>
  );
};

export default Card;
