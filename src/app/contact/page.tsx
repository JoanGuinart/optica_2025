import React from 'react'
import { isUnderConstruction } from "@/lib/under-construction";
import { UnderConstructionPage } from "@/components/UnderConstructionPage";

const Contact = () => {
  if (isUnderConstruction()) {
    return <UnderConstructionPage />;
  }

  return (
    <div>Contact</div>
  )
}

export default Contact