import { ProjectCardProps } from "@/components/projects/project-card";
import { ProjectsListItem } from "@/components/projects/projects-list";

export const PROJECT_DATA: ProjectsListItem[] = [
    {
      index: 0,
      title: "Project 1",
      href: "/projects",
      tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
      image: {
        LIGHT: "/images/projects/p1.avif",
        DARK: "/images/projects/p1.avif",
      },
    },
    {
      index: 1,
      title: "Project 2",
      href: "/projects",
      tags: [
        "Reactjs",
        "Tailwindcss",
        "Scss",
        "Vite",
        "React-router-dom",
        "Redux",
        "Vercel",
      ],
      image: {
        LIGHT: "/images/projects/p2.avif",
        DARK: "/images/projects/p2.avif",
      },
    },
    {
      index: 2,
      title: "Project 3",
      href: "/projects",
      tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
      image: {
        LIGHT: "/images/projects/p3.avif",
        DARK: "/images/projects/p3.avif",
      },
    },
  ];

  export const PROJECTS_CARD: ProjectCardProps[] = [
    {
      name: "Project 1",
      favicon: "/images/projects/logos/jsontree.ico",
      imageUrl: [
        "/images/projects/p1.avif",
        "/images/projects/p1.avif",
      ],
      description:
        "Lorem Ipsum",
      sourceCodeHref: "",
      liveWebsiteHref: "",
    },
    {
      name: "Project 2",
      favicon: "",
      imageUrl: [
        "/images/projects/p2.avif",
        "/images/projects/p2.avif",
      ],
      description:
        "afxsddahgfdhdfh ddsgsdg ds dsgs gsd ghdgnbv mnz rwaehearra",
      sourceCodeHref: "",
      liveWebsiteHref: "",
    },
    {
        name: "Project 2",
        favicon: "",
        imageUrl: [
          "/images/projects/p2.avif",
          "/images/projects/p2.avif",
        ],
        description:
          "afxsddahgfdhdfh ddsgsdg ds dsgs gsd ghdgnbv mnz rwaehearra",
        sourceCodeHref: "",
        liveWebsiteHref: "",
      },
      {
        name: "Project 2",
        favicon: "",
        imageUrl: [
          "/images/projects/p2.avif",
          "/images/projects/p2.avif",
        ],
        description:
          "afxsddahgfdhdfh ddsgsdg ds dsgs gsd ghdgnbv mnz rwaehearra",
        sourceCodeHref: "",
        liveWebsiteHref: "",
      },
      {
        name: "Project 2",
        favicon: "",
        imageUrl: [
          "/images/projects/p2.avif",
          "/images/projects/p2.avif",
        ],
        description:
          "afxsddahgfdhdfh ddsgsdg ds dsgs gsd ghdgnbv mnz rwaehearra",
        sourceCodeHref: "",
        liveWebsiteHref: "",
      },
      {
        name: "Project 2",
        favicon: "",
        imageUrl: [
          "/images/projects/p2.avif",
          "/images/projects/p2.avif",
        ],
        description:
          "afxsddahgfdhdfh ddsgsdg ds dsgs gsd ghdgnbv mnz rwaehearra",
        sourceCodeHref: "",
        liveWebsiteHref: "",
      },
  ];