import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Services",
    links: [
      { title: "Vos clés", href: "/processus" },
      { title: "Le ménage et le linge", href: "/processus" },
      { title: "Les voyageurs", href: "/processus" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/processus",
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
