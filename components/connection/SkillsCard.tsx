import React from "react";
import WhiteWrapper from "../global/WhiteWrapper";

type SkillsCardProps = {
  skills: string[];
};

const SkillsCard = ({ skills }: SkillsCardProps) => {
  return (
    <WhiteWrapper title="Skills">
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="py-1 text-primary px-3 rounded bg-[#F8F8FD]"
          >
            {skill}
          </div>
        ))}
      </div>
    </WhiteWrapper>
  );
};

export default SkillsCard;
