import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Link from "next/link";
import Logo from "./Logo";

const NewsLetterForm = () => {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-900">
        Abonnez-vous à la newsletter
      </h2>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          autoComplete="email"
          aria-label="Email adress"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6
            text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950
            focus:outline-none focus:ring-neutral-950/5   
          "
        />
      </div>
    </form>
  );
};

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-28 lg:mt-35">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <FooterNavigation />
          <div className="flex lg:justify-end">
            <NewsLetterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end w-full justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href={"/"} aria-label="Home">
            <Logo className="h-9" fillOnHover>
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
