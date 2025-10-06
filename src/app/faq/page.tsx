import React from 'react'
import { isUnderConstruction } from "@/lib/under-construction";
import { UnderConstructionPage } from "@/components/UnderConstructionPage";

const Faq = () => {
  if (isUnderConstruction()) {
    return <UnderConstructionPage />;
  }

  return (
    <div>Faq</div>
  )
}

export default Faq