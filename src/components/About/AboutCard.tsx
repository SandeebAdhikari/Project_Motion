import WavyText from "../../animations/WavyText";

interface AboutCardProps {
  title: string;
  description: string;
  image: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, description, image }) => {
  return (
    <div className="p-5 border w-full h-[200px] rounded-3xl">
      <div className="flex justify-center gap-2">
        <img src={image} className="w-8 h-8 rounded-full" />
        <h1 className="text-4xl">
          <WavyText word={title} />
        </h1>
      </div>

      <p className="text-lg">{description}</p>
    </div>
  );
};

export default AboutCard;
