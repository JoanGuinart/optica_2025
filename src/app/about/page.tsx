import React from "react";
import { isUnderConstruction } from "@/lib/under-construction";
import { UnderConstructionPage } from "@/components/UnderConstructionPage";

const About = () => {
  if (isUnderConstruction()) {
    return <UnderConstructionPage />;
  }

  return <div>About</div>;
};

export default About;
