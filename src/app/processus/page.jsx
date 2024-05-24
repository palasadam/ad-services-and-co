import Build from "@/components/Build";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import React from "react";

const ProcessusPage = () => {
  return (
    <div>
      <PageIntro
        eyebrow=" Nos services de conciergerie"
        title="On s’occupe de tout et on le fait bien "
      >
        <p>
          Notre équipe vous propose un service complet, de la visibilité de
          votre annonce sur Airbnb à l&apos;entretien de votre logement.
          <br />
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
    </div>
  );
};

export default ProcessusPage;
