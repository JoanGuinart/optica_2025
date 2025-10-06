import React from 'react'
import { isUnderConstruction } from "@/lib/under-construction";
import { UnderConstructionPage } from "@/components/UnderConstructionPage";

const Products = () => {
  if (isUnderConstruction()) {
    return <UnderConstructionPage />;
  }

  return (
    <div>Products</div>
  )
}

export default Products