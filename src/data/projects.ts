import ExpenseManagementDashboard from "../assets/images/projects/Dashboard_PE.png";
import EcommerceMainPage from "../assets/images/projects/MainPage_Ecommerce.png";
import FlexiWallet from "../assets/images/projects/FlexiWallet.png";
import Portfolio from "../assets/images/projects/PortFolio.png";
import PostBlog from "../assets/images/projects/PostBlog.png";
import WeatherApp from "../assets/images/projects/WeatherApp.png";

import ReactjsSvg from "../assets/icons/reactjs.svg";
import ReduxSvg from "../assets/icons/redux.svg";
import DjangoSvg from "../assets/icons/django.svg";
import ReactRouterDomIcon from "../assets/icons/react-router-color.svg";
import Nextdotjs from "../assets/icons/nextdotjs.svg";
import FramerMotion from "../assets/icons/framer.svg";
import TypeScript from "../assets/icons/typescript.svg";
import TailwindCss from "../assets/icons/tailwindcss.svg";
import DaisyUI from "../assets/icons/daisyui.svg";
import ShadCn from "../assets/icons/shadcnui.svg";

export const PROJECT_DATA = [
  {
    projectName: "Bank Management System",
    create: "Next.js",
    icon: [Nextdotjs, TypeScript, TailwindCss, ShadCn],
    image: FlexiWallet,
    url: "https://bank-management-system-sandy.vercel.app/",
    invertColor: true,
    github: "https://github.com/SandeebAdhikari/Bank_Management_System",
  },
  {
    projectName: "E-commerce Platform",
    create: "Redux",
    icon: [ReduxSvg, TailwindCss, DaisyUI],
    image: EcommerceMainPage,
    url: "e-commerce-mu-ten-81.vercel.app",
    invertColor: false,
    github: "https://github.com/SandeebAdhikari/E-Commerce",
  },
  {
    projectName: "Personal Expense Tracker",
    create: "React Router-DOM",
    icon: [ReactRouterDomIcon, TailwindCss, DaisyUI],
    image: ExpenseManagementDashboard,
    url: "https://personal-expense-tracker-rose.vercel.app/",
    invertColor: true,
    github: "https://github.com/SandeebAdhikari/Personal_Expense_Tracker",
  },
  {
    projectName: "Post-Blog Django App",
    create: "Django",
    icon: [DjangoSvg],
    image: PostBlog,
    url: "https://post-blog-django-project.vercel.app/",
    invertColor: false,
    github: "https://github.com/SandeebAdhikari/Post_blog_Django_Project",
  },

  {
    projectName: "Weather App",
    create: "React.js",
    icon: [ReactjsSvg, DaisyUI, TailwindCss],
    image: WeatherApp,
    url: "https://weather-app-sage-theta-96.vercel.app/",
    invertColor: false,
    github: "https://github.com/SandeebAdhikari/Weather_App",
  },
  {
    projectName: "Portfolio Website",
    create: "Framer Motion",
    icon: [ReactjsSvg, TypeScript, FramerMotion],
    image: Portfolio,
    url: "https://www.sandeebadhikari.com/",
    invertColor: true,
    github: "https://github.com/SandeebAdhikari/Project_Motion",
  },
];
