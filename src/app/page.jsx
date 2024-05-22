import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Testimonials from "@/components/Testimonials";
import MainImage from "@/images/main.png";
import Image from "next/image";
import logoHome from "@/images/clients/phobia/logomark-dark.svg";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              Louez votre logement quand vous voulez !
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              Nous proposons nos services de conciergerie aux propriétaires et
              investisseurs qui souhaitent augmenter leur chiffre d’affaires en
              France.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src={MainImage}
              width={300}
              height={300}
              alt="Main Image"
              className="rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        </FadeIn>
      </Container>
      <Services />

      <Testimonials
        className={"mt-24 sm:mt-32 lg:mt-40"}
        client={{ name: "Julia", logo: logoHome }}
      >
        Service sérieux et professionnel. Équipe à l&apos;écoute de ses clients.
        Un bon moyen de générer un revenu avec peu d&apos;effort !
      </Testimonials>
    </main>
  );
}
