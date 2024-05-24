import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Notre culture"
        title="Équilibrez votre passion avec votre passion pour la vie."
        invert
      >
        <p>
          Nous sommes un groupe de personnes partageant les mêmes valeurs
          fondamentales.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Fidélité" invert>
            Notre équipe est avec nous depuis le début parce qu&apos;aucun
            d&apos;entre eux n&apos;est autorisé à avoir un profil LinkedIn.
          </GridListItem>
          <GridListItem title="Confiance" invert>
            Nous ne nous soucions pas de savoir quand notre équipe travaille, du
            moment qu&apos;elle le fait à chaque seconde.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            On ne sait jamais ce que quelqu&apos;un vit à la maison et nous
            veillons à ce qu&apos;il ne le sache jamais.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
