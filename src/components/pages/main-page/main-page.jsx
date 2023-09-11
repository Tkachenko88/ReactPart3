import React from "react";
import About from "/src/components/blocks/about/about";
import Advantages from "/src/components/blocks/advantages/advantages";

function MainPage({ products }) {
  return (
    <>
      <About />
      <Advantages products={products} />
    </>
  );
}

export default MainPage;
