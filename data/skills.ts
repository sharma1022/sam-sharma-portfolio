
  import { type SkillsSectionProps } from "@/components/skills/skills-section";
  
  // Languages
  import HtmlSvg from "@/public/icons/html.svg";
  import CsssSvg from "@/public/icons/css.svg";
  import SassSvg from "@/public/icons/sass.svg";
  import JavascriptSvg from "@/public/icons/javascript.svg";
  import TypescriptSvg from "@/public/icons/typescript.svg";
  import JavaSvg from "@/public/icons/java.svg";
  
  // Libraries
  import ReactjsSvg from "@/public/icons/reactjs.svg";
  import NextjsSvg from "@/public/icons/next.svg"
  import SolidjsSvg from "@/public/icons/solidjs.svg";
  import ReduxSvg from "@/public/icons/redux.svg";
  import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
  import MuiSvg from "@/public/icons/mui.svg";
  import ViteSvg from "@/public/icons/vite.svg";
  import ReactRouterDomSvg from "@/public/icons/react-router.svg";
  import FramerMotionSvg from "@/public/icons/framer-motion.svg";
  
  // Backend
  import NodejsSvg from "@/public/icons/nodejs.svg";
  import ExpressSvg from "@/public/icons/express.svg"
  import SocketIoSvg from "@/public/icons/socket-io.svg"
  import KnexSvg from "@/public/icons/knex.svg";

  // Database and ORMS
  import MongoDBSvg from "@/public/icons/mongodb.svg";
  import PostgressSvg from "@/public/icons/postgresql.svg";
  import MySqlSvg from "@/public/icons/mysql.svg"
  
  // Tools and Tech
  import GitSvg from "@/public/icons/git.svg";
  import PostmanSvg from "@/public/icons/postman.svg";
  import FigmaSvg from "@/public/icons/figma.svg";
  import JiraSvg from "@/public/icons/jira.svg";
export const SKILLS_DATA: SkillsSectionProps["skills"] = [
    {
      sectionName: "Languages",
      skills: [
        {
          name: "HTML",
          icon: HtmlSvg,
        },
        {
          name: "CSS",
          icon: CsssSvg,
        },
        {
          name: "SASS",
          icon: SassSvg,
        },
        {
          name: "Javascript",
          icon: JavascriptSvg,
        },
        {
          name: "Typescript",
          icon: TypescriptSvg,
        },
        {
          name: "Java",
          icon: JavaSvg,
        },
      ],
    },
    {
      sectionName: "Libraries and Frameworks",
      skills: [
        {
          name: "Reactjs",
          icon: ReactjsSvg,
        },
        {
          name: "Nextjs",
          icon: NextjsSvg,
        },
        {
          name: "Solidjs",
          icon: SolidjsSvg,
        },
        {
          name: "React Router Dom",
          icon: ReactRouterDomSvg,
        },
        {
          name: "Redux",
          icon: ReduxSvg,
        },
        {
          name: "Tailwindcss",
          icon: TailwindcssSvg,
        },
        {
          name: "MUI",
          icon: MuiSvg,
        },
        {
          name: "Framer motion",
          icon: FramerMotionSvg,
        },
        {
          name: "Vite",
          icon: ViteSvg,
        },
      ],
    },
    {
      sectionName: "Backend",
      skills: [
        {
          name: "Nodejs",
          icon: NodejsSvg,
        },
        {
          name: "Express",
          icon: ExpressSvg,
        },
        {
          name: "Socket.io",
          icon: SocketIoSvg,
        },
        {
            name: "Knex.js",
            icon: KnexSvg,
          },
        
      ],
    },
    {
      sectionName: "Databases and ORMs",
      skills: [
        {
          name: "MongoDB",
          icon: MongoDBSvg,
        },
        {
            name: "MySql",
            icon: MySqlSvg,
        },
        {
          name: "Postgress",
          icon: PostgressSvg,
        },
      ],
    },
    {
      sectionName: "Tools and Technologies",
      skills: [
        {
          name: "Git",
          icon: GitSvg,
        },
        {
          name: "Postman",
          icon: PostmanSvg,
        },
        {
            name: "Figma",
            icon: FigmaSvg,
          },
          {
            name: "Jira",
            icon: JiraSvg,
          },
      ],
    },
  ];