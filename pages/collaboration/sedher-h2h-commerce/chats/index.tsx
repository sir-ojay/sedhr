import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import ChatsWrapper from "@/components/chats/ChatsWrapper";
import ChatSection from "@/components/chats/ChatSection";

type ChatsProps = {
  defaultGrid: number;
  navs: {
    name: string;
    href: string;
  }[];
};
const Chats = () => {

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
          <ChatsWrapper>
            <ChatSection />
          </ChatsWrapper>
        </section>
      </FormProvider>
    </DefaultLayout>
  );
};

export default Chats;

