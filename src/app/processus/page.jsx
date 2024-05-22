import Build from "@/components/Build";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

const ProcessusPage = () => {
  return (
    <div>
      <PageIntro eyebrow="Notre Processus" title="On résume :">
        <p>
          &apos;&apos; Bu alan yazilacak &apos;&apos;
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          assumenda possimus iusto ex saepe molestias qui atque, aspernatur
          nesciunt culpa! Deleniti dicta voluptatem eos excepturi quisquam
          molestiae laborum laboriosam adipisci?
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
      {/* Values */}
      <Values />
    </div>
  );
};

export default ProcessusPage;
