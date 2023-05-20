import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import StatusPill from "@/components/global/StatusPill";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { RFP } from "@/types/collaboration";
import { motion } from "framer-motion";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  type?: "default" | "active" | "saved" | "complete";
};

const RFPCard = ({
  // type = "default",
  userId,
  bids,
  category,
  productName,
  budgets,
}: Props & RFP) => {
  const router = useRouter();

  return (
    <motion.article layout>
      <WhiteWrapper>
        <div className="space-y-3">
          <div className="flex gap-3">
            <Avatar
              href="/connection/1"
              shape="square"
              size={54}
              name={productName}
            />
            <div>
              <Link
                href="/connection/1"
                className="font-semibold text-[#2A2069] hover:underline"
              >
                {productName}
              </Link>
              <div className="text-sm text-dark-400 font-normal font-epilogue text-[#4C4475]">
                {category}
              </div>
              {/* <div className="text-sm text-accents-brown">
                {budgets?.[0]?.value}
              </div> */}
            </div>
          </div>
          <hr />
          <div className="flex items-center gap-2">
            {/* <StatusPill text="Product" bg="#1AD48D1A" textColor="#1AD48D" /> */}
            <span className="text-sm text-[#B0B7C3] text-xs">
              {moment(bids?.deadline).format(
                "DD, MMMM yy, h:mm:ss a [- Deadline]"
              )}
            </span>
          </div>
          {/* <h4 className="font-semibold text-sm text-[#2A2069] hover:underline">
            {productName}
          </h4> */}
          {/* <div className="text-sm text-[#4C4475]">{description}</div> */}

          <div className="flex items-center gap-5">
            <Button
              href="/connection/user-profile/2"
              className="w-full"
              theme="outline"
              onClick={() =>
                router.push(
                  router.asPath === "/collaboration/rfp/respond"
                    ? `/collaboration/rfp/applications/${userId}`
                    : `/collaboration/rfp/${userId}/apply-for-rfp`
                )
              }
            >
              {router.asPath === "/collaboration/rfp/respond"
                ? "View Applications"
                : "Apply Now"}
            </Button>
          </div>
        </div>
      </WhiteWrapper>
    </motion.article>
  );
};

export default RFPCard;
