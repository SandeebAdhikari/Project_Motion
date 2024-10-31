import Timeline from "../animations/Timeline";
import WavyText from "../animations/WavyText";

const Education = () => {
  const events = [
    {
      title: "Bachelors of Computer Science",
      school: "2020-2025 | NJIT",
      description:
        "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.",
    },
    {
      title: "Master of Computer Science",
      school: "Coming Soon | Unknown",
      description:
        "It will be a continuation of my undergraduate studies with a focus on AI.",
    },
    {
      title: "Online Coursework",
      school: "2020-2025 | Udemy And Coursera",
      description:
        "Completed coursework in C prgramming, html, css, react, node, express, mongodb, and more.",
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 mt-[250px]">
      <h1 className="font-display text-3xl">
        <WavyText word="Education And Certification" />
      </h1>

      {events.map((event, index) => (
        <Timeline key={index} index={index} event={event} />
      ))}
    </div>
  );
};

export default Education;
