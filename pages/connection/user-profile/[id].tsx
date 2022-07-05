import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import AdditionalDetailsCard from "@/components/sedher-universe/AdditionalDetailsCard";
import LargeDetailsCard from "@/components/global/LargeDetailsCard";
import AboutCard from "@/components/global/AboutCard";
import LargeProfileCard from "@/components/global/LargeProfileCard";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import SkillsCard from "@/components/connection/SkillsCard";
import RecommendationCard from "@/components/connection/RecommendationCard";

const SingleUser = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col lg:grid lg:grid-cols-9 gap-8 mt-10">
        <div className="col-span-6 space-y-5">
          <LargeDetailsCard type="account" />
          <AboutCard title="About Me" />
          <WhiteWrapper>
            <LargeProfileCard
              avatarShape="circle"
              title="Experience"
              type="experience"
            />
          </WhiteWrapper>
          <WhiteWrapper>
            <LargeProfileCard
              //   avatarShape="circle"
              title="Education"
              type="education"
            />
          </WhiteWrapper>
          <WhiteWrapper>
            <LargeProfileCard
              //   avatarShape="circle"
              title="licenses & certifications"
              type="licenses-certifications"
            />
          </WhiteWrapper>
          <SkillsCard
            skills={[
              "Communication",
              "Ceneral Medicine",
              "Detail Oriented",
              "Leadership",
              "Psychiatry",
            ]}
          />
          <RecommendationCard />
        </div>
        <AdditionalDetailsCard type="experience" />
      </div>
    </DefaultLayout>
  );
};

export default SingleUser;
