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