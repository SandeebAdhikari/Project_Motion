import FadeRight from "../animations/FadeRight";
import { useDebounceValue } from "../../hooks/useDebounceValue";
import { useScreenBreakpoint } from "../../hooks/useScreenBreakpoint";
import ContactCard from "./ContactCard";

const ContactMe = () => {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebonced = useDebounceValue(isMobile, 600);
  const email = "sandeebadhikari@gmail.com";
  return (
    <div className="mt-[100px] flex w-full justify-between items-center h-[900px]]">
      <div className="flex p-2 ">
        <FadeRight duration={1} whileInView={!isMobileDebonced}>
          <h1 className="text-8xl  font-bold text-center mt-6">
            Want to <br /> start <br /> a new <br />
            Project?
          </h1>
          <p className="flex justify-end text-2xl text-slate-600">
            Or just say hello.
          </p>
        </FadeRight>
      </div>
      <ContactCard email={email} />
    </div>
  );
};

export default ContactMe;
