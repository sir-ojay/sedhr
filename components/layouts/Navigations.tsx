import { LeftNavigationProps } from "@/types/layouts/LeftNavigationProps";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { LoginResponse } from "@/types/auth/auth";
import { useEffect, useState } from "react";
import { useGetAllPagesQuery } from "@/services/pages";
import { Pages } from "@/types/pages";

const Navigations = ({
  navigations,
  navigationSettings,
}: LeftNavigationProps) => {
  const location = useRouter();

  const logout = () => {
    Cookies.remove("sedherToken");
    Cookies.remove("sedherUser");
    location.push("/auth/signin");
  };

  const token = Cookies.get("sedherToken");

  const [user, setUser] = useState<LoginResponse>();

  useEffect(() => {
    try {
      const user = JSON.parse(Cookies.get("sedherUser") || "{}");
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [pageData, setPageData] = useState<Pages[]>([]);

  const { data, error, isLoading, isSuccess, isFetching } = useGetAllPagesQuery(
    {
      token,
    }
  );

  useEffect(() => {
    console.log(data);
    data && setPageData(data.data as Pages[]);
  }, [isSuccess, data]);

  console.log(pageData);

  return (
    <div className="overflow-y-auto h-[calc(100vh-120px)] pt-1 transition-all ease-in scrollbar-thin hover:scrollbar-thumb-primary hover:scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      {navigations.map((navigation) => (
        <div key={navigation.name} className="pb-3">
          {navigation.name && (
            <>
              <hr />
              <div
                aria-label={`${navigation.name.toLowerCase()} navigation group`}
                className="mt-5 mb-3 px-8 text-[#3772ff7f] text-xs xl:text-sm font-semibold"
              >
                {navigation.name}
              </div>
            </>
          )}

          {/* workimg on adding condition */}
          <ul className="flex flex-col gap-[2px] px-4">
            {navigation.links.map((item) => (
              <li
                key={item.name}
                title={item.name}
                aria-label={`link to ${item.name}`}
                className="flex items-center cursor-pointer"
              >
                {item.href && user?.hasOnboarded ? (
                  <Link
                    href={`${item.href}${item.slug ? item.slug : ""}${
                      item.query ? item.query : ""
                    }`}
                    target={item.external ? "_blank" : "_self"}
                    className={`nav-hover text-sm xl:text-base ${
                      location.pathname.includes(item.href) ? "active" : ""
                    } cursor-pointer flex items-center w-full px-4 py-3 gap-x-4 transition-all ease-in group-hover:text-primary text-dark-100 group-hover:bg-[#E7F6FD] rounded-[5px]`}
                  >
                    <img
                      src={`/assets/icons/layouts/${item.icon}.svg`}
                      className="group-hover:invert-[25%] group-hover:sepia-[49%] group-hover:saturate-[527%] group-hover:hue-rotate-[137deg] group-hover:brightness-[93%]"
                    />

                    <div className="leading-[160%] font-medium">
                      {item.name}
                    </div>
                  </Link>
                ) : (
                  <div
                    className={`nav-hover text-sm xl:text-base cursor-pointer flex items-center w-full px-4 py-3 gap-x-4 transition-all ease-in group-hover:text-primary text-dark-100 group-hover:bg-[#E7F6FD] rounded-[5px]`}
                  >
                    <img
                      src={`/assets/icons/layouts/${item.icon}.svg`}
                      className="group-hover:invert-[25%] group-hover:sepia-[49%] group-hover:saturate-[527%] group-hover:hue-rotate-[137deg] group-hover:brightness-[93%]"
                    />

                    <div className="leading-[160%] font-medium">
                      {item.name}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {user?.hasOnboarded && user?.accountType === "business" && (
        <div className="flex flex-col gap-[2px] px-4">
          <p className="mt-5 mb-3 px-4 text-[#3772ff7f] text-xs xl:text-sm font-semibold">
            PAGES
          </p>
          <ul>
            {pageData.map((item) => (
              <li
                key={item.businessName}
                title={item.businessName}
                aria-label={`link to ${item.businessName}`}
                className="flex items-center cursor-pointer"
              >
                {item.link && user?.hasOnboarded ? (
                  <Link
                    href={`${item.link}${item.slug ? item.slug : ""}${
                      item.query ? item.query : ""
                    }`}
                    target={item.external ? "_blank" : "_self"}
                    className={`nav-hover text-sm xl:text-base ${
                      location.pathname.includes(item.link) ? "active" : ""
                    } cursor-pointer flex items-center w-full px-4 py-3 gap-x-4 transition-all ease-in group-hover:text-primary text-dark-100 group-hover:bg-[#E7F6FD] rounded-[5px]`}
                  >
                    <img
                      src={item.profilePicture}
                      className="group-hover:invert-[25%] group-hover:sepia-[49%] group-hover:saturate-[527%] group-hover:hue-rotate-[137deg] group-hover:brightness-[93%]"
                    />

                    <div className="leading-[160%] font-medium">
                      {item.businessName}
                    </div>
                  </Link>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      {navigationSettings.map((navigation) => (
        <div key={navigation.name} className="pb-3">
          {navigation.name && (
            <>
              <hr />
              <div
                aria-label={`${navigation.name.toLowerCase()} navigation group`}
                className="mt-5 mb-3 px-8 text-[#3772ff7f] text-xs xl:text-sm font-semibold"
              >
                {navigation.name}
              </div>
            </>
          )}

          {/* workimg on addimg condition */}
          <ul className="flex flex-col gap-[2px] px-4">
            {navigation.links.map((item) => (
              <li
                key={item.name}
                title={item.name}
                aria-label={`link to ${item.name}`}
                className="flex items-center cursor-pointer"
              >
                {item.href && user?.hasOnboarded ? (
                  <Link
                    href={`${item.href}${item.slug ? item.slug : ""}${
                      item.query ? item.query : ""
                    }`}
                    target={item.external ? "_blank" : "_self"}
                    className={`nav-hover text-sm xl:text-base ${
                      location.pathname.includes(item.href) ? "active" : ""
                    } cursor-pointer flex items-center w-full px-4 py-3 gap-x-4 transition-all ease-in group-hover:text-primary text-dark-100 group-hover:bg-[#E7F6FD] rounded-[5px]`}
                  >
                    <img
                      src={`/assets/icons/layouts/${item.icon}.svg`}
                      className="group-hover:invert-[25%] group-hover:sepia-[49%] group-hover:saturate-[527%] group-hover:hue-rotate-[137deg] group-hover:brightness-[93%]"
                    />
                    <div className="leading-[160%] font-medium">
                      {item.name}
                    </div>
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      if (item.name === "Logout") logout();
                    }}
                    type="button"
                    tabIndex={0}
                    className="nav-hover text-sm xl:text-base flex items-center w-full px-4 py-3 gap-x-4 transition-all ease-in group-hover:text-primary text-dark-100 group-hover:bg-[#E7F6FD] rounded-[5px]"
                  >
                    <img
                      src={`/assets/icons/layouts/${item.icon}.svg`}
                      alt={item.name}
                      title={item.name}
                      className="group-hover:invert-[25%] group-hover:sepia-[49%] group-hover:saturate-[527%] group-hover:hue-rotate-[137deg] group-hover:brightness-[93%]"
                    />
                    <div className="leading-[160%] font-medium">
                      {item.name}
                    </div>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Navigations;
