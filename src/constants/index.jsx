import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Services",
    links: [
      { title: "Votre annonce Airbnb", href: "/services/annonce-airbnb" },
      { title: "Vos clés", href: "/services/clé-airbnb" },
      { title: "Le ménage et le linge", href: "/services/menage-airbnb" },
      { title: "Les voyageurs", href: "/services/check-in-out-airbnb" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/services",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Tarifs", href: "/tarifs" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
