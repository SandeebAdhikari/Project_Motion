import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import About from "../components/About";
import Project from "../components/Project";
import Footer from "../components/Footer";
import SkillShowcase from "../components/skills/SkillShowCase";
import { SKILLS_DATA } from "../data/skills";
const MainPage = () => {
  return (
    <div className="flex-col text-white mx-[350px]">
      <NavBar />
      <Profile />
      <SkillShowcase skills={SKILLS_DATA} />
      <About />
      <Project />
      <Footer />
    </div>
  );
};

export default MainPage;
