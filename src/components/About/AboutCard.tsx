import WavyText from "../../animations/WavyText";

interface AboutCardProps {
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, description }) => {
  return (
    <div className="p-5 border w-full h-[200px] rounded-3xl">
      <h1 className="text-4xl">
        <WavyText word={title} />
      </h1>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default AboutCard;
