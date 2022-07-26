import React from "react";
import MyItemsNav from "./MyItemsNav";

type MyItemsWrapperProps = {
  children: React.ReactNode;
};

const MyItemsWrapper = ({ children }: MyItemsWrapperProps) => {
  return (
    <div className="grid grid-cols-6 gap-8">
      <section className="col-span-2 space-y-6">
        <MyItemsNav />
      </section>
      <section className="col-span-4 space-y-6">{children}</section>
    </div>
  );
};

export default MyItemsWrapper;
