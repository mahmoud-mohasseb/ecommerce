import React from "react";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { Grid, Center } from "@chakra-ui/react";

const Categories = () => {
  return (
    <Center>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Grid>
    </Center>
  );
};

export default Categories;
