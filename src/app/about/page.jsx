import Blockquote from "@/components/Blockquote";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
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
            Lorsque j&apos;ai fait mon premier investissement locatif à Torcy,
            je l&apos;ai tout de suite mis sur la plateforme AirBnB. J&apos;ai
            vite pris goût à la gestion de ce logement et une passion pour ce
            métier d&apos;accueil et de services s&apos;est développée. Ajoutez
            à cela les commentaires positifs des différents voyageurs à qui
            j&apos;ai donc pu faire ressentir ma passion, j&apos;ai décidé de
            m&apos;agrandir et de créer ma conciergerie
            <Blockquote
              author={{
                name: "AD Services & Co. Asli DUYAR",
                role: "CEO",
              }}
              className="text-neutral-600 pl-8 mt-12 "
            >
              <p className="font-bold">
                NOTRE POLITIQUE: GERER LES LOGEMENTS DE NOS CLIENTS COMME SI
                C&apos;ETAIT LES NOTRES{" "}
              </p>
              Nous accordons beaucoup d&apos;importance à un suivi quotidien et
              personnalisé des propriétaires et des clients afin d&apos;assurer
              une satisfaction maximale des deux côtés.
            </Blockquote>
          </p>
        </div>
      </PageIntro>
      <Cultures />
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
