import { LeftNavigationProps } from "@/types/layouts/LeftNavigationProps";
import { Twirl as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navigations from "./Navigations";

const LeftNavigation = ({
  navigations,
  isOpen,
  setOpen,
}: LeftNavigationProps) => {
  return (
    <nav className="bg-white fixed top-0 left-0 w-[272px] h-full">
      <div className="ml-6 flex items-center justify-between xl:ml-[62px] xl:my-8 my-2">
        <Link href="/feed">
          <Image
            src="/assets/icons/logo.svg"
            width={125}
            height={53}
            alt="sedher home logo"
          />
        </Link>
        <div className="xl:hidden">
          <Hamburger
            color="#0b211a"
            size={20}
            label="Show menu"
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </div>
      <Navigations navigations={navigations} />
    </nav>
  );
};

export default LeftNavigation;

LeftNavigation.defaultProps = {
  navigations: [
    {
      name: null,
      links: [
        {
          name: "Feed",
          icon: "feed",
          href: "/feed",
        },
        // {
        // 	name: "My Connections",
        // 	icon: "my-connections",
        // 	href: "/my-connections",
        // },
        // {
        // 	name: "My Cart",
        // 	icon: "my-cart",
        // 	href: "/my-cart",
        // 	slug: "/my-products",
        // 	query: "?t=product",
        // },
        // {
        // 	name: "My Items",
        // 	icon: "my-items",
        // 	href: "/my-items",
        // 	slug: "/my-products",
        // 	query: "?t=product",
        // },
        {
          name: "Sedher Universe",
          icon: "sedher-universe",
          // slug: "/my-connections",
          href: "/sedher-universe",
        },
        // {
        // 	name: "More Sedher",
        // 	icon: "more",
        // 	// href of More Sedher is null because it is not a link, but a button
        // 	href: null,
        // },
      ],
    },
    {
      name: "SERVICES",
      links: [
        {
          name: "Connection",
          icon: "connection",
          href: "/connection",
        },
        {
          name: "Collaboration",
          icon: "collaboration",
          href: "/collaboration",
          slug: "/rfp",
        },
        {
          name: "Sedher Finance",
          icon: "sedher-finance",
          href: "/sedher-finance",
        },
        {
          name: "Marketplace",
          icon: "marketplace",
        //   href: "/feed",
          external: true,
        },
      ],
    },
    {
      name: "ACCOUNT",
      links: [
        {
          name: "Notifications",
          icon: "notifications",
          href: "/notifications",
        },
        {
          name: "Messages",
          icon: "messages",
          href: "/messages",
        },
        {
          name: "Profile",
          icon: "profile",
          href: "/profile",
        },
      ],
    },
    {
      name: "SETTINGS",
      links: [
        {
          name: "Settings",
          icon: "settings",
          href: "/settings",
        },
        {
          name: "Help center",
          icon: "help-center",
          href: "/help-center",
        },
        {
          name: "Logout",
          icon: "logout",
          href: null,
        },
      ],
    },
  ],
};
