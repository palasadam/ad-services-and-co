import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/foto1.jpeg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="SAY CHEEESE!" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Avec un photographe professionnel, on organise une séance photo de
          votre appartement afin de rédiger une annonce attractive sur les
          différentes plateformes.{" "}
          <strong className="font-semibold text-neutral-950">
            Notre équipe communication{" "}
          </strong>
          s&apos;occupe de la rédaction de l&apos;annonce à la gestion des
          réservations et demandes d&apos;informations quotidiennes.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Les voyageurs ont à disposition une personne totalement à l&apos;écoute
        avant, pendant et lors de la fin de leur séjour.{" "}
      </h3>
      <TagList className="mt-4">
        <TagListItem>test 1</TagListItem>
        <TagListItem>test 1</TagListItem>
        <TagListItem>test 1</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
