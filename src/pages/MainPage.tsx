import NavBar from "../components/NavBar";
import Profile from "../components/Profile/Profile";
import About from "../components/About/About";
import Project from "../components/Project";
import Footer from "../components/Footer";
import SkillShowCase from "../components/skills/SkillShowCase";
import { SKILLS_DATA } from "../data/skills";
const MainPage = () => {
  return (
    <div className="flex-col text-white mx-[350px]">
      <NavBar />
      <Profile />
      <About />
      <SkillShowCase skills={SKILLS_DATA} />
      <Project />
      <Footer />
    </div>
  );
};

export default MainPage;
