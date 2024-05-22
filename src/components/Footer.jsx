import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import logo from "@/images/logo.png";

const NewsLetterForm = () => {
  return (
    <div>
      <Image
        src={logo}
        width={240}
        height={175}
        alt="Main Image"
        className="rounded-lg"
      />
    </div>
  );
};

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-28 lg:mt-35">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <FooterNavigation />
          <div className="flex justify-center lg:justify-end">
            <NewsLetterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end w-full justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href={"/"} aria-label="Home">
            <Logo className="h-9" fillonhover>
              Ad Services and Co
            </Logo>
          </Link>
          <p className="text-sm text-neutral-700">
            © 2024 Ad Services and Co. Tout droits réservés.
          </p>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
