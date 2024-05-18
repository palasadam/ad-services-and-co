import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Qui sommes-nous ?"
        title="Des services, des services, toujours des services"
      >
        <p>
          Trust comes with transparency : “Notre transparence est notre marque
          de confiance”
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            On est des passionnés du service et de la tech ! On est fier de
            pouvoir travailler pour des propriétaires et des locataires qui vont
            profiter de bons moments (un peu grâce à nous !). Et heureux quand
            un voyageur nous remercie de notre disponibilité pendant son séjour.
          </p>
          <p>
            On a créé Ad Service & Co pour que chacun puisse gagner de l’argent
            avec son logement, l’esprit serein et en toute sécurité ! Et avec la
            conviction que l’on peut transformer le séjour des voyageurs en
            moment inoubliable.
          </p>
        </div>
      </PageIntro>

      {/* <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />Ad Service & Co
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection /> */}
    </>
  );
};

export default AboutPage;
