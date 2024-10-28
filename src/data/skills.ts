import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "../components/Icons";
import { type SkillShowcaseProps } from "../components/skills/SkillShowCase";

// Languages
import HtmlSvg from "../../public/icons/html.svg";
import CsssSvg from "../../public/icons/css.svg";
import SassSvg from "../../public/icons/sass.svg";
import JavascriptSvg from "../../public/icons/javascript.svg";
import TypescriptSvg from "../../public/icons/typescript.svg";
import PythonSvg from "../../public/icons/python.svg";
import JavaSvg from "../../public/icons/java.svg";
import CppSvg from "../../public/icons/cpp.svg";
import CSvg from "../../public/icons/c.svg";

// Libraries
import ReactjsSvg from "../../public/icons/reactjs.svg";
import SolidjsSvg from "../../public/icons/solidjs.svg";
import ReduxSvg from "../../public/icons/redux.svg";
import TailwindcssSvg from "../../public/icons/tailwindcss.svg";
import MuiSvg from "../../public/icons/mui.svg";
import ViteSvg from "../../public/icons/vite.svg";

// Backend
import NodejsSvg from "../../public/icons/nodejs.svg";
import DjangoSvg from "../../public/icons/django.svg";

// Database and ORMs
import MongoDBSvg from "../../public/icons/mongodb.svg";
import PostgressSvg from "../../public/icons/postgresql.svg";
import MysqlSvg from "../../public/icons/mysql.svg";

// Tools and Tech
import GitSvg from "../../public/icons/git.svg";
import DockerSvg from "../../public/icons/docker.svg";
import AwsSvg from "../../public/icons/aws.svg";
import PostmanSvg from "../../public/icons/postman.svg";
import RedisSvg from "../../public/icons/redis.svg";

export const SKILLS_DATA: SkillShowcaseProps["skills"] = [
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
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "Java",
        icon: JavaSvg,
      },
      {
        name: "C++",
        icon: CppSvg,
      },
      {
        name: "C",
        icon: CSvg,
      },
      {
        name: "Sass",
        icon: SassSvg,
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
        icon: SiNextdotjs,
      },
      {
        name: "Solidjs",
        icon: SolidjsSvg,
      },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
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
        icon: FramerMotionIcon,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
      {
        name: "Vite PWA",
        icon: VitePwaIcon,
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
        icon: SiExpress,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
      {
        name: "Django",
        icon: DjangoSvg,
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
        name: "Postgress",
        icon: PostgressSvg,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
      {
        name: "Mysql",
        icon: MysqlSvg,
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
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "Redis",
        icon: RedisSvg,
      },
    ],
  },
];