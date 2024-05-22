import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/logo.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Simples, efficaces, pros et à votre écoute"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Rentabilisez votre investissement en transformant votre actif
          immobilier : bureau, réserve...
          <br />
          La location saisonnière représente aujourd&apos;hui un des placements
          les plus rentables.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem
              title="Vos clés
"
            >
              Vous nous confiez les clés de votre logement. On les remet aux
              voyageurs et on les récupère à leur départ.
            </ListItem>
            <ListItem
              title="Le ménage et le linge
"
            >
              Nos pros du ménage interviennent avant et après chaque voyageur.
              Votre linge reste dans leur placard ! On fourni les draps,
              serviette, torchons … Savons, shampoing, sacs poubelle, papier
              toilette … on gère vraiment tout !
            </ListItem>
            <ListItem
              title="La maintenance et l’assistance 24/7
"
            >
              Un problème rencontré par un voyageur, nos pros de l’assistance
              interviennent 24/7.
            </ListItem>
            <ListItem
              title="La caution et les assurances
"
            >
              En cas de problème, on mobilise caution voyageurs, assurance hôte
              Airbnb et notre assurance. On est sur le pont 24/7 pour résoudre
              tous les éventuels problèmes.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
