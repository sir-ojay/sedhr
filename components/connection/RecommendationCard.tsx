import React from "react";
import WhiteWrapper from "../global/WhiteWrapper";

const RecommendationCard = () => {
  return (
    <WhiteWrapper title="Recommendation" status="Recommend Salami">
      <article>
        <p className="font-normal text-base text-neutral-80 font-epilogue">
          Salami is an hardworking colleague, he is always ready to work with
          high team spirit i would recommend him at any point should his service
          be required
        </p>
      </article>
    </WhiteWrapper>
  );
};

export default RecommendationCard;
