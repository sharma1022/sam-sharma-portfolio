import { ProjectCardProps } from "@/components/projects/project-card";
import { ProjectsListItem } from "@/components/projects/projects-list";

export const PROJECT_DATA: ProjectsListItem[] = [
    {
      index: 0,
      title: "SteadyPathAI",
      href: "https://steadypathai.netlify.app/",
      tags: ["Reactjs","Vite", "Tailwindcss","React-router-dom", "Postgress", "DrizzleORM","Serverless Neon","GeminiAI"],
      image: {
        LIGHT: "/images/projects/steady-2.png",
        DARK: "/images/projects/steady-1.png",
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
      title: "CineVerse",
      href: "/projects",
      tags: ["React.js","MongoDB","Node.js","JWT","React Redux","React Router Dom", "Express.js","TMDB API" ,"Material UI", "Vercel", "SwiperJS", "React DND"],
      image: {
        LIGHT: "/images/projects/cineverse-2.png",
        DARK: "/images/projects/cineverse-1.png",
      },
    },
  ];

  export const PROJECTS_CARD: ProjectCardProps[] = [
    {
      name: "SteadyPathAI",
      favicon: "/images/projects/logos/jsontree.ico",
      imageUrl: [
        "/images/projects/steady-1.png",
        "/images/projects/steady-2.png",
        "/images/projects/steady-3.png",
        "/images/projects/steady-4.png",
        "/images/projects/steady-5.png",
        "/images/projects/steady-6.png",
        "/images/projects/steady-7.png",
        "/images/projects/steady-8.png",
        "/images/projects/steady-9.png",
      ],
      description:
        "AI Driven Mental Headlth recommendations.",
      sourceCodeHref: "",
      liveWebsiteHref: "https://steadypathai.netlify.app/",
    },
    {
      name: "InStock",
      favicon: "/images/projects/logos/instock.ico",
      imageUrl: [
        "/images/projects/p2.avif",
        "/images/projects/p2.avif",
      ],
      description:
        "Warehouse and Inventory management System build in a 4 person team as part of the BrainStation group project",
      sourceCodeHref: "",
      liveWebsiteHref: "",
    },
    {
        name: "CineVerse",
        favicon: "/images/projects/logos/cineverse.ico",
        imageUrl: [
          "/images/projects/cineverse-1.png",
          "/images/projects/cineverse-2.png",
          "/images/projects/cineverse-3.png",
          "/images/projects/cineverse-4.png",
          "/images/projects/cineverse-5.png",
          "/images/projects/cineverse-6.png",
        ],
        description:
          "TMDB movie app built using the MERN stack",
        sourceCodeHref: "https://github.com/sharma1022/cine-verse",
        liveWebsiteHref: "https://cine-verse-client.vercel.app/",
      },
      {
        name: "Portfolio Website",
        favicon: "",
        imageUrl: [
          "/images/projects/portfolio-1.png",
          "/images/projects/portfolio-2.png",
          "/images/projects/portfolio-3.png",
        ],
        description:
          "My personal portfolio website",
        sourceCodeHref: "https://github.com/sharma1022/sam-sharma-portfolio",
        liveWebsiteHref: "",
      },
      {
        name: "BandSite",
        favicon: "",
        imageUrl: [
          "/images/projects/bandsite-1.png",
          "/images/projects/bandsite-2.png",
        ],
        description:
          "Bandsite Frontend built during my time at BrainStation",
        sourceCodeHref: "",
        liveWebsiteHref: "",
      },
      {
        name: "Sumz",
        favicon: "/images/projects/logos/sumz.ico",
        imageUrl: [
          "/images/projects/sumz.png",
        ],
        description:
          "Summerize Articles with OpenAI GPT-4",
        sourceCodeHref: "https://github.com/sharma1022/ai-summarizer",
        liveWebsiteHref: "https://phenomenal-clafoutis-4a2ebd.netlify.app/",
      },
      {
        name: "Brainflix",
        favicon: "/images/projects/logos/brainflix.svg",
        imageUrl: [
          "/images/projects/brainflix-1.png",
          "/images/projects/brainflix-2.png",
          "/images/projects/brainflix-3.png",
        ],
        description:
          "Custom Video Player API",
        sourceCodeHref: "https://github.com/sharma1022/sam-sharma-brainflix",
        liveWebsiteHref: "https://brainflix-chi.vercel.app/",
      },
  ];