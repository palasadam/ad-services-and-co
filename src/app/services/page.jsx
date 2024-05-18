import PageIntro from "@/components/PageIntro";
import React from "react";

const ServicePage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Notre services"
        title="On s’occupe de tout et on le fait bien !"
      >
        <p>
          Notre équipe vous propose un service complet, de la visibilité de
          votre annonce sur Airbnb à l&apos;entretien de votre logement.
        </p>
      </PageIntro>
    </>
  );
};
export default ServicePage;
