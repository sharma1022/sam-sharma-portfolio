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
        LIGHT: "/images/projects/instock-1.png",
        DARK: "/images/projects/instock-1.png",
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
      favicon: "/images/projects/logos/steadypath.svg",
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
      iconLists: ["/images/projects/icons/react.svg",
        "/images/projects/icons/tailwind.svg",
        "/images/projects/icons/drizzle.jpg",
        "/images/projects/icons/neon.svg",
        "/images/projects/icons/postgresql.svg"
      ],
      sourceCodeHref: "https://github.com/sharma1022/SteadyPathAI",
      liveWebsiteHref: "https://steadypathai.netlify.app/",
    },
    {
      name: "InStock",
      favicon: "/images/projects/logos/instock.ico",
      imageUrl: [
        "/images/projects/instock-1.png",
        "/images/projects/instock-2.png",
        "/images/projects/instock-3.png",
        "/images/projects/instock-4.png",
        "/images/projects/instock-5.png"
      ],
      description:
        "Warehouse and Inventory management System build in a 4 person team as part of the BrainStation group project",
      iconLists: ["/images/projects/icons/react.svg",
        "/images/projects/icons/node.svg",
        "/images/projects/icons/express.svg",
        "/images/projects/icons/knex.svg",
        "/images/projects/icons/mysql.svg",
        "/icons/sass.svg"
      ],
      sourceCodeHref: "https://github.com/sharma1022/InStock-MCSD",
      liveWebsiteHref: "https://instock-phi.vercel.app/",
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
        iconLists: ["/icons/mongodb.svg",
          "/images/projects/icons/express.svg",
        "/images/projects/icons/react.svg",
        "/images/projects/icons/node.svg",
        "/icons/react-router.svg",
        "/icons/mui.svg",
      ],
        sourceCodeHref: "https://github.com/sharma1022/cine-verse",
        liveWebsiteHref: "https://cine-verse-client.vercel.app/",
      },
      {
        name: "Portfolio Website",
        favicon: "/images/projects/logos/portfolio.svg",
        imageUrl: [
          "/images/projects/portfolio-1.png",
          "/images/projects/portfolio-2.png",
          "/images/projects/portfolio-3.png",
        ],
        description:
          "My personal portfolio website",
        iconLists: ["/icons/next.svg",
          "/images/projects/icons/tailwind.svg",
          "/images/projects/icons/nodemailer.png",
          "/images/projects/icons/aceternity.jpg",
          "/icons/framer-motion.svg"
        ],
        sourceCodeHref: "https://github.com/sharma1022/sam-sharma-portfolio",
        liveWebsiteHref: "/",
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
        iconLists: ["/icons/html.svg","/icons/javascript.svg","/icons/sass.svg"],
        sourceCodeHref: "https://github.com/sharma1022/sam-sharma-bandsite",
        liveWebsiteHref: "https://bandsite-delta.vercel.app/",
      },
      {
        name: "Sumz",
        favicon: "/images/projects/logos/sumz.ico",
        imageUrl: [
          "/images/projects/sumz.png",
        ],
        description:
          "Summerize Articles with OpenAI GPT-4",
        iconLists: ["/icons/reactjs.svg","/images/projects/icons/openai.svg"],
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
        iconLists: ["/icons/reactjs.svg","/images/projects/icons/express.svg","/images/projects/icons/node.svg","/icons/sass.svg"],
        sourceCodeHref: "https://github.com/sharma1022/sam-sharma-brainflix",
        liveWebsiteHref: "https://brainflix-chi.vercel.app/",
      },
  ];