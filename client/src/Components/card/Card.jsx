import React, { useRef, useEffect, useState } from "react";
import style from "./Card.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteFavorite, addFavorite } from '../../reducer/action';
import { Link } from "react-router-dom";
import { getTypeClass } from "./utils";

const Card = ({ id, name, image, type }) => {
  const [favorite, setFavorite] = useState(undefined);
  const typeClass = getTypeClass(type);
  const cardRef = useRef(null);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (favorite === undefined) {
      dispatch(addFavorite(id));
      setFavorite(true);
    } else {
      dispatch(deleteFavorite(id));
      setFavorite(undefined);
    }
  };

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

  const isFavorite = favorites.includes(id);

  return (
    <div className={style.container} ref={cardRef}>
      <button onClick={handleFavorite} className={isFavorite ? `${style.favorite} ${style.isFavorite}` : style.isFavorite}>
             {isFavorite ? "❤️" : "🤍"}
      </button>

      <div className={`${style.element} ${style[typeClass]}`}>
        <h3 className={style.name}>{name}</h3>
        <Link to={`/detail/${id}`}>
          <img src={image} alt={name} className={style.image} />
        </Link>
        <h5 className={style.id}>#{id.toString().padStart(3, "0")}</h5>
      </div>
    </div>
  );
};

export default Card;

