import { ProjectCardProps } from "@/components/projects/project-card";
import { ProjectsListItem } from "@/components/projects/projects-list";

export const PROJECT_DATA: ProjectsListItem[] = [
    {
      index: 0,
      title: "SteadyPathAI",
      href: "https://steadypathai.netlify.app/",
      tags: ["Reactjs","Vite", "Tailwindcss","React-router-dom", "Postgress", "DrizzleORM","Serverless Neon","GeminiAI"],
      image: {
        LIGHT: "/images/projects/steadyp2.png",
        DARK: "/images/projects/steadyp1.png",
      },
    },
    {
      index: 1,
      title: "InStock",
      href: "/projects",
      tags: [
        "Reactjs",
        "Scss",
        "Nodejs",
        "Knexjs",
        "MySQL",
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
      name: "SteadyPathAI",
      favicon: "/images/projects/logos/jsontree.ico",
      imageUrl: [
        "/images/projects/steadyp1.png",
        "/images/projects/p1.avif",
      ],
      description:
        "AI Driven Mental Headlth recommendations.",
      sourceCodeHref: "",
      liveWebsiteHref: "https://steadypathai.netlify.app/",
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