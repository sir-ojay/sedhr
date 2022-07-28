import ListNav from "@/components/global/ListNav";
import ListSortHeader from "@/components/global/ListSortHeader";
import MessagesWrapper from "@/components/messages/MessagesWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";

type MessagesProps = {
  defaultGrid: number;
  navs: {
    name: string;
    href: string;
  }[];
};
const Messages = ({ navs, defaultGrid }: MessagesProps) => {
  const [grid, setGrid] = useState(defaultGrid);
  const {
    query: { view },
  } = useRouter();

  return (
    <DefaultLayout title="Sedher | Messages">
      <section className="space-y-6">
        <ListSortHeader
          title="Messages"
          results={73}
          setGrid={setGrid}
          defaultGrid={defaultGrid}
          message
        />

        <ListNav navs={navs} />
        {(view === "chats" || view === undefined) && (
          <MessagesWrapper >Hellobb</MessagesWrapper>
        )}
        {view === "emails" && <MessagesWrapper >Email</MessagesWrapper>}
      </section>
    </DefaultLayout>
  );
};

export default Messages;

Messages.defaultProps = {
  defaultGrid: 4,
  navs: [
    {
      name: "Chats",
      href: "/messages?view=chats",
    },
    {
      name: "Emails",
      href: "/messages?view=emails",
    },
  ],
};
