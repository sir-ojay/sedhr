import {
  useGetFriendsQuery,
  useSendFriendRequestMutation,
} from "@/services/connections";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Avatar from "../global/Avatar";
import Button from "../global/Button";
import WhiteWrapper from "../global/WhiteWrapper";

type YouMightKnowprops = {
  data: {
    accountType: string;
    name: string;
    profilePicture: string;
    username: string;
    _id: string;
  }[];
};

const YouMightKnow = () => {
  const [friends, setFriends] = useState<any>();

  const router = useRouter();

  const token: any = Cookies.get("sedherToken");

  const { data, error, isLoading, isSuccess, isFetching } = useGetFriendsQuery({
    token,
  });

  useEffect(() => {
    data && setFriends(data.data as any);
  }, [isSuccess, data]);
  //   console.log(friends);

  return (
    <WhiteWrapper>
      <header className="flex items-center justify-between font-epilogue">
        <div
          title="You Might Know"
          className="font-semibold text-lg text-dark-900"
        >
          You Might Know
        </div>
        <Button
          onClick={() => router.push("/sedher-universe")}
          title="See All"
          theme="plain"
          className="text-secondary text-sm font-bold"
        >
          See All
        </Button>
      </header>
      <hr className="mb-5 mt-2" />
      <section className="space-y-2 font-epilogue">
        {isLoading && (
          <div className="space-y-6">
            <div className="bg-accents-light-blue h-[140px]"></div>
            <div className="bg-accents-light-blue h-[140px]"></div>
            <div className="bg-accents-light-blue h-[140px]"></div>
          </div>
        )}
        {friends &&
          friends
            // ?.slice(0, 3)
            .map((account) => (
              <YouMightKnowCard
                key={account._id}
                account={account}
                setFriends={setFriends}
              />
            ))}
      </section>
    </WhiteWrapper>
  );
};

export default YouMightKnow;

const YouMightKnowCard = ({ account, setFriends, key }: any) => {
  //   const [friends, setFriends] = useState<any>();
  // console.log(account._id)
  const router = useRouter();

  const token: any = Cookies.get("sedherToken");

  const { data, error, isLoading, isSuccess, isFetching } = useGetFriendsQuery({
    token,
  });

  const [sendRequest, { isLoading: isLoadingFriendRequest }] =
    useSendFriendRequestMutation();
  const ignoreButton = (key) => {
    setFriends((prev) => {
      let response = [...prev].filter((person) => person._id != account._id);
      return response;
    });
  };

  return (
    <div className="bg-accents-light-blue p-4">
      <div className="flex gap-3 mb-4">
        <Avatar
          name={account?.name || "S D"}
          size={48}
          as="Link"
          href={`/profile/${account?.username}`}
        />
        <div>
          <div className="font-semibold text-dark-900">
            <a href={`/profile/${account?.username}`}>
              {" "}
              {account.name || "No Name"}
            </a>
          </div>
          <div className="text-sm text-accents-brown">
            {account.accountType}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Button
          onClick={() => sendRequest({ token, username: account.username })}
          className="w-full"
          loading={isLoadingFriendRequest}
          size="sm"
        >
          Connect
        </Button>
        <Button
          className="w-full"
          size="sm"
          theme="outline"
          onClick={() => {
            ignoreButton(account._id);
          }}
        >
          Ignore
        </Button>
      </div>
    </div>
  );
};

YouMightKnow.defaultProps = {
  accounts: [
    {
      name: "susan adebambo",
      description: "Medical Doctor at Eko hostpital",
      accountType: "HCP",
    },
    {
      name: "Thomas Clinic",
      description: "Dental clinics ",
      accountType: "Healthcare company",
    },
  ],
};
