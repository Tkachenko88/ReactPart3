import React from "react";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import ProductCard from "../../ui/product-card/product-card";
import "./style.css";

function Advantages({ products }) {
  return products && products.length ? (
    <section className="advantages">
      <Title>Почему фермерские продукты лучше?</Title>
      <ul className="advantages__list">
        {products.map((product) => (
          <li className="advantages__item" key={product.id}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
      <Button minWidth={260}>Купить билет</Button>
    </section>
  ) : null;
}

export default Advantages;
