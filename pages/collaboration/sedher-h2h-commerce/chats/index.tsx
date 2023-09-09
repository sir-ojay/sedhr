import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ChatsWrapper from "@/components/chats/ChatsWrapper";
import { GetServerSideProps } from "next";
import { requireAuthentication } from "hoc/requireAuthentication";
import dynamic from "next/dynamic";


const ChatSection = dynamic(() => import("@/components/chats/ChatSection"), {
  ssr: false,
});

type ChatsProps = {
  defaultGrid: number;
  navs: {
    name: string;
    href: string;
  }[];
};
const Chats = () => {
  const [userIds, getUserIds] = useState({});
  // console.log({ userIds });
  const {
    query: { view },
  } = useRouter();
  const methods = useForm({
    defaultValues: {
      chat: "",
    },
    mode: "onChange",
  });

  return (
    <DefaultLayout title="Sedher | h2h Chat">
      <FormProvider {...methods}>
        <section className="space-y-6">
          <ChatsWrapper getUserIds={getUserIds}>
            <ChatSection userIds={userIds} />
          </ChatsWrapper>
        </section>
      </FormProvider>
    </DefaultLayout>
  );
};

export default Chats;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (context) => {
    return {
      props: {
        customers: [],
      },
    };
  }
);
