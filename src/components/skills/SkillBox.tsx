import { FC, SVGProps } from "react";

export type SkillBoxProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>> | string;
};

export default function SkillBox(props: SkillBoxProps) {
  const { name, icon: Icon } = props;

  return (
    <div className="flex w-max items-center gap-2 rounded-lg border border-orange-200 bg-white px-4 py-3 text-sm shadow-md dark:bg-gray-800">
      {typeof Icon === "string" ? (
        <img
          src={Icon}
          alt={`${name} icon`}
          className="h-5 w-5 sm:h-8 sm:w-8"
        />
      ) : (
        <Icon className="h-5 w-5 sm:h-8 sm:w-8" />
      )}
      <span className="font-medium text-gray-100">{name}</span>
    </div>
  );
}
