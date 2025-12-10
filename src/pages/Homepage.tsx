import { useState } from "react";
import type { product } from "../assets/productInterface";
import { Link } from "react-router-dom";

function Homepage({ products }) {
  return (
    <>
      <h1>Homepage</h1>
      <Link to="productlist">Check out products</Link>
    </>
  );
}

export default Homepage;
