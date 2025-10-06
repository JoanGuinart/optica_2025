import React from 'react'
import { isUnderConstruction } from "@/lib/under-construction";
import { UnderConstructionPage } from "@/components/UnderConstructionPage";

const Services = () => {
  if (isUnderConstruction()) {
    return <UnderConstructionPage />;
  }

  return (
    <div>Services</div>
  )
}

export default Services