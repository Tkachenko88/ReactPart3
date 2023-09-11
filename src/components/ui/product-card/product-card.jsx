import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import "./style.css";

function ProductCard({
  title, // название особенности
  owner, // владелец особенности (обычный магазин, фермерский)
  about, // описание особенности
  isNegative, // является ли особенность отрицательной
  image // иконка
}) {
  return (
    <section
      className={`product-card${isNegative ? " product-card_negative" : ""}`}
    >
      <header className="product-card__header">
        <img
          className="product-card__img"
          width={56}
          height={56}
          src={image}
          alt={title}
        />
        <div>
          <span
            className={`product-card__owner${
              isNegative ? " product-card__owner_negative" : ""
            }`}
          >
            {owner}
          </span>
          <Title size={TitleSize.EXTRA_SMALL}>{title}</Title>
        </div>
      </header>
      <p
        className="product-card__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </section>
  );
}
export default ProductCard;
