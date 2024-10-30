import NavBar from "../components/NavBar";
import Profile from "../components/profile/Profile";
import About from "../components/About/About";
import Project from "../components/Project";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className="flex-col text-white mx-[350px]">
      <NavBar />
      <Profile />
      <About />

      <Project />
      <Footer />
    </div>
  );
};

export default MainPage;
