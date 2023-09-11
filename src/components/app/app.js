import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import products from "/src/mocks/products";
import "./style.css";

export default function App() {
  return <PageWrapper products={products} />;
}
