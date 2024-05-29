import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/foto3.jpeg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section
      title="Le ménage et le linge
    "
      image={{ src: imageMeeting, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">
            On assure une prestation ménagère à chaque sortie de locataires
          </strong>
          , avec une équipe ponctuelle, rigoureuse et à l&apos;écoute qui saura
          assimiler rapidement les différentes directives particulières
          relatives aux prestations que vous souhaiteriez mettre en place dans
          le logement pour accueillir les voyageurs.
        </p>
      </div>
      <br />
      <List>
        <ListItem title="test1">qsdfqsdf</ListItem>
        <ListItem title="test2">qsdfqsdf</ListItem>
        <ListItem title="test3">qsdfqsdqsdf </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
