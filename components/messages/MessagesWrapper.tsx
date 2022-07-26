import React from "react";
import Input from "../global/Input";
import WhiteWrapper from "../global/WhiteWrapper";

type MessagesWrapperProps = {
  children: React.ReactNode;
};

const MessagesWrapper = ({ children }: MessagesWrapperProps) => {
  return (
    <div className="grid grid-cols-6 gap-8">
      <section className="col-span-2 space-y-6">
        <WhiteWrapper>
          <Input type="search" placeholder="Search..." />
        </WhiteWrapper>
      </section>
      <section className="col-span-4 space-y-6">{children}</section>
    </div>
  );
};

export default MessagesWrapper;
