import React from 'react'
import { isUnderConstruction } from "@/lib/under-construction";
import { UnderConstructionPage } from "@/components/UnderConstructionPage";

const Brands = () => {
  if (isUnderConstruction()) {
    return <UnderConstructionPage />;
  }

  return (
    <div>Brands</div>
  )
}

export default Brands