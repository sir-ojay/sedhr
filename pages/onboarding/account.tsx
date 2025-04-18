import AccountTypes from "@/components/onboarding/account/AccountTypes";
import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import DefaultLayout from "@/layouts/DefaultLayout";
import { LoginResponse } from "@/types/auth/auth";
import { requireAuthentication } from "hoc/requireAuthentication";
import Cookies from "js-cookie";
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";

const AccountPage: NextPage = () => {
  const [user, setUser] = useState<LoginResponse>();

  useEffect(() => {
    try {
      const user = JSON.parse(Cookies.get("sedherUser") || "{}");
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <DefaultLayout title="Sedher | Onboarding | Account" showHeader={false}>
      <OnboardingHeader step={1}>
        <section>
          <div className="font-epilogue my-[50px] text-center">
            {user && (
              <h1 className="font-bold capitalize text-[26px] md:mb-3">
                Welcome {user?.name.toLowerCase()}
              </h1>
            )}
            <p className="text-[#8A94A6] text-sm md:text-base">
              Are you ready to take your collaboration to the next level? Great!
              Let's get started by setting up your account. <br /> Our simple
              setup process will have you connected and collaborating in no
              time!
            </p>
          </div>

          <AccountTypes />
        </section>
      </OnboardingHeader>
    </DefaultLayout>
  );
};

export default AccountPage;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (context) => {
    return {
      props: {},
    };
  }
);
