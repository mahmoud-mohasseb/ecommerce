import React, { useState, useRef } from "react";
import { Center, SimpleGrid, Badge } from "@chakra-ui/react";
import { popularProducts } from "../data";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  return (
    <Center>
      <SimpleGrid
        templateColumns={{ sm: "1fr 1fr", md: "2fr 2fr 2fr 2fr" }}
        gap={6}
      >
        {popularProducts.map((item, id) => (
          <>
            <Product key={id} item={item.img} />
          </>
        ))}
      </SimpleGrid>
    </Center>
  );
};

export default Products;
