import React, { useRef, useEffect } from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { getTypeClass } from "./utils";

const Card = ({ id, name, image, type }) => {
  const typeClass = getTypeClass(type);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    const height = el.clientHeight;
    const width = el.clientWidth;

    el.addEventListener("mousemove", (evt) => {
      const { layerX, layerY } = evt;
      const yRotation = ((layerX - width / 2) / width) * 20;
      const xRotation = ((layerY - height / 2) / height) * 20;

      const string = `
        perspective(250px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
      `;
      el.style.transform = string;
    });

    el.addEventListener("mouseout", () => {
      el.style.transform = `
        perspective(250px)
        scale(1)
        rotateX(0)
        rotateY(0)
      `;
    });

    return () => {
      el.removeEventListener("mousemove", () => {});
      el.removeEventListener("mouseout", () => {});
    };
  }, []);

  return (
    <div className={style.container} ref={cardRef}>
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

export default Card;
