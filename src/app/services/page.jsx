import PageIntro from "@/components/PageIntro";
import React from "react";
import Blockquote from "@/components/Blockquote";
import Link from "next/link";
import Image from "next/image";
import imageKey from "@/images/clients/home/key.svg";

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
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Nos services de conciergerie{" "}
            </h2>
          </div>
          <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
            <div>
              <article>
                <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                    <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                      <Image
                        alt=""
                        loading="lazy"
                        width="36"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        className="h-16 w-16 flex-none"
                        src={imageKey}
                      />
                      <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                        Vos clés
                      </h3>
                    </div>
                    <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                      <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                        ---
                      </p>
                      <p className="text-sm text-neutral-950 lg:mt-2">
                        <time datetime="2023-01">January 2024</time>
                      </p>
                    </div>
                  </div>
                  <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                    <p className="font-display text-4xl font-medium text-neutral-950">
                      <Link href="/work/family-fund">
                        Vous nous confiez les clés de votre logement{" "}
                      </Link>
                    </p>
                    <div className="mt-6 space-y-6 text-base text-neutral-600">
                      <p>
                        On les remet aux voyageurs et on les récupère à leur
                        départ.
                      </p>
                      <p>
                        Vos clés sont gérées comme des petits trésors
                        <br />
                        Le service check-in check-out est fluide et efficace
                      </p>
                    </div>
                    <div className="mt-8 flex">
                      <Link
                        className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                        aria-label="Read case study: FamilyFund"
                        href="/work/family-fund"
                      >
                        <span className="relative top-px">+ D&apos;info</span>
                      </Link>
                    </div>
                    <Blockquote
                      author={{
                        name: "AD Services",
                        role: "CEO",
                      }}
                      className="text-neutral-600 pl-8 mt-12 "
                    >
                      Afin que vous puissiez nous déposer vos clés en toute
                      sécurité, on vous sélectionne un partenaire de remises de
                      clés dédié, à deux pas de chez vous ! Cafés, supermarchés,
                      laveries... Nous avons plus de 300 points de remises de
                      clés à travers la France. Vos clés sont gardés dans des
                      casiers à code sécurisés.
                    </Blockquote>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicePage;
