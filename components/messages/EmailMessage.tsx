import React from "react";
import WhiteWrapper from "../global/WhiteWrapper";

const EmailMessage = () => {
  return (
    <div className="my-[5px]">
      <WhiteWrapper>
        <div className="flex  space-x-2 justify-between ">
          <h4>Emmanuel Bubble</h4>
          <p>We are making these changes to provide....</p>
          <time> 9:34 PM</time>
        </div>
      </WhiteWrapper>
    </div>
  );
};

export default EmailMessage;
