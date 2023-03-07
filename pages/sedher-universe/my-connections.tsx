import AdjustableProfileCard from "@/components/global/AdjustableProfileCard";
import Button from "@/components/global/Button";
import GridContainer from "@/components/global/GridContainer";
import ListNav from "@/components/global/ListNav";
import ListSortHeader from "@/components/global/ListSortHeader";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import SedherUniverseWrapper from "@/components/sedher-universe/SedherUniverseWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import {
  useGetFriendRequestsQuery,
  useGetFriendsListQuery,
} from "@/services/connections";
import { requireAuthentication } from "hoc/requireAuthentication";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type MyConnectionsProps = {
  defaultGrid: number;
  navs: {
    name: string;
    href: string;
  }[];
};

type Friends = {
  data: {
    accountType: string;
    name: string;
    profilePicture: string;
    username: string;
    description: string;
    _id: string;
  }[];
};

const MyConnections = ({ navs, defaultGrid }: MyConnectionsProps) => {
  const [grid, setGrid] = useState(defaultGrid);
  const [tab, setTab] = useState("friends");

  const {
    query: { t },
  } = useRouter();

  const [friendsRequests, setFriendsRequests] = useState<Friends>();
  const [friends, setFriends] = useState<Friends>();
  console.log(friends);

  const token: any = Cookies.get("sedherToken");

  const { data, error, isLoading, isSuccess, isFetching } =
    useGetFriendRequestsQuery({ token });

  const {
    data: friendsData,
    isLoading: friendsIsLoading,
    isSuccess: friendsIsSuccess,
  } = useGetFriendsListQuery({ token });

  useEffect(() => {
    // console.log(data);
    data && setFriendsRequests(data);
  }, [isSuccess, data]);

  useEffect(() => {
    // console.log(friendsData);
    friendsData && setFriends(friendsData);
  }, [isSuccess, data]);
  return (
    <DefaultLayout title="Sedher | Sedher universe | My Connections">
      <SedherUniverseWrapper>
        <ListSortHeader
          title="My Connections"
          // results={73000}
          setGrid={setGrid}
          defaultGrid={defaultGrid}
        />
        <ListNav navs={navs} />

        {(t === "hcps" || t === undefined) && (
          <div className="flex items-center gap-3">
            <Button
              onClick={() => setTab("friends")}
              theme="plain"
              className={`border-2 border-[#B8C9C9] rounded-full ${
                tab === "friends"
                  ? " text-primary bg-tertiary"
                  : "text-[#4C4475]"
              }`}
            >
              Friends(12)
            </Button>
            <Button
              onClick={() => setTab("requests")}
              theme="plain"
              className={`border-2 border-[#B8C9C9] rounded-full ${
                tab === "requests"
                  ? " text-primary bg-tertiary"
                  : "text-[#4C4475]"
              }`}
            >
              Received(2)
            </Button>
          </div>
        )}

        {(t === "hcps" || t === undefined) && tab === "requests" && (
          <>
            <GridContainer grid={grid}>
              {friendsRequests?.data.map((account, i) => (
                <AdjustableProfileCard
                  key={account._id + i}
                  name={account.name}
                  description={account.description || "No description"}
                  accountType={account.accountType}
                  username={account.username}
                  href={`/profile/${account.username}`}
                  // image={account.image}
                  cardType="connectAccept"
                  grid={grid}
                />
              ))}
              {isLoading &&
                [1, 2, 3, 4, 5, 6].map((i) => (
                  <WhiteWrapper key={i} className="h-[200px]"></WhiteWrapper>
                ))}
            </GridContainer>
            {friendsRequests?.data.length === 0 && tab === "requests" && (
              <div>
                You currently do not have any pending connection request
              </div>
            )}
          </>
        )}

        {(t === "hcps" || t === undefined) && tab === "friends" && (
          <>
            <GridContainer grid={grid}>
              {/* {data?.data} */}
              {friends?.data.map((account, i) => (
                <AdjustableProfileCard
                  key={account._id + 1}
                  name={account.name}
                  description={account.description || "No description"}
                  accountType={account.accountType}
                  href={`/profile/${account.username}`}
                  username={account.username}
                  // image={account.image}
                  cardType="connect"
                  connected
                  grid={grid}
                />
              ))}
              {isLoading &&
                [1, 2, 3, 4, 5, 6].map((i) => (
                  <WhiteWrapper key={i} className="h-[200px]"></WhiteWrapper>
                ))}
            </GridContainer>
            {friends?.data.length === 0 && (
              <div>You currently do not have any connection</div>
            )}
          </>
        )}

        {t === "patientcarecenters" && (
          <>
            <GridContainer grid={grid}>
              {friends?.data.map((account, i) => (
                <AdjustableProfileCard
                  key={account._id + 1}
                  name={account.name}
                  description={account.description || "No description"}
                  accountType={account.accountType}
                  href={`/profile/${account.username}`}
                  username={account.username}
                  // image={account.image}
                  cardType="connect"
                  connected
                  grid={grid}
                />
              ))}
              {isLoading &&
                [1, 2, 3, 4, 5, 6].map((i) => (
                  <WhiteWrapper key={i} className="h-[200px]"></WhiteWrapper>
                ))}
            </GridContainer>
            {friends?.data.length === 0 && (
              <div>You currently do not have any connection</div>
            )}
          </>
        )}

        {t === "business" && (
          <>
            <GridContainer grid={grid}>
              {friends?.data.map((account, i) => (
                <AdjustableProfileCard
                  key={account._id + 1}
                  name={account.name}
                  description={account.description || "No description"}
                  accountType={account.accountType}
                  href={`/profile/${account.username}`}
                  username={account.username}
                  // image={account.image}
                  cardType="connect"
                  connected
                  grid={grid}
                />
              ))}
              {isLoading &&
                [1, 2, 3, 4, 5, 6].map((i) => (
                  <WhiteWrapper key={i} className="h-[200px]"></WhiteWrapper>
                ))}
            </GridContainer>
            {friends?.data.length === 0 && (
              <div>You currently do not have any connection</div>
            )}
          </>
        )}

        {t === "notforprofit" && (
          <>
            <GridContainer grid={grid}>
              {friends?.data.map((account, i) => (
                <AdjustableProfileCard
                  key={account._id + 1}
                  name={account.name}
                  description={account.description || "No description"}
                  accountType={account.accountType}
                  href={`/profile/${account.username}`}
                  username={account.username}
                  // image={account.image}
                  cardType="connect"
                  connected
                  grid={grid}
                />
              ))}
              {isLoading &&
                [1, 2, 3, 4, 5, 6].map((i) => (
                  <WhiteWrapper key={i} className="h-[200px]"></WhiteWrapper>
                ))}
            </GridContainer>
            {friends?.data.length === 0 && (
              <div>You currently do not have any connection</div>
            )}
          </>
        )}
      </SedherUniverseWrapper>
    </DefaultLayout>
  );
};

export default MyConnections;

MyConnections.defaultProps = {
  defaultGrid: 2,
  navs: [
    {
      name: "Patient care centres",
      href: "/sedher-universe/my-connections?t=patientcarecenters",
    },
    {
      name: "Business",
      href: "/sedher-universe/my-connections?t=business",
    },
    {
      name: "HCP’s",
      href: "/sedher-universe/my-connections?t=hcps",
    },
    // {
    // 	name: "Sedher Luminaries",
    // 	href: "/sedher-universe/my-connections?t=sedherluminaries",
    // },
    {
      name: "Not for profit",
      href: "/sedher-universe/my-connections?t=notforprofit",
    },
  ],
};

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (context) => {
    return {
      props: {
        customers: [],
      },
    };
  }
);
