import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import StatusPill from "@/components/global/StatusPill";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { Snergi } from "@/types/collaboration";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PopupButton } from "react-calendly";

type SynergiCardProps = {
	type?: string;
	star?: boolean;
};

const SynergiCard = ({
	type,
	star,
	bookings,
	id,
	locationDetails,
	equipments,
	owner,
}: SynergiCardProps & Snergi) => {
	const router = useRouter();


	return (
    <motion.article layout>
      <WhiteWrapper>
        <div className="space-y-3">
          <div className="flex gap-3 mb-3">
            <Avatar
              href="/connection/1"
              shape="square"
              size={54}
              name={owner?.name!}
              image={owner?.profilePicture!}
            />
            <div className="w-full flex justify-between">
              <div>
                <Link
                  href="/connection/1"
                  className="font-semibold text-[#2A2069] hover:underline"
                >
                  {owner?.name}
                </Link>
                {/* <div className="text-sm text-dark-400 font-normal font-epilogue text-[#4C4475]">
                  Dental clinics
                </div> */}
                <div className="text-sm text-accents-brown">
                  {owner?.accountType}
                </div>
              </div>
              <div>
                {type === "active" && (
                  <StatusPill
                    text="active"
                    bg="white"
                    textColor="#1699F8"
                    statusStyle="border border-[#1699F8] font-semibold font-archivo flex justify-between items-center "
                  />
                )}
                {type === "cancel" && (
                  <StatusPill
                    text="cancel"
                    bg="white"
                    textColor="#FF3956"
                    statusStyle="border border-[#FF3956] font-semibold font-archivo flex justify-between items-center "
                  />
                )}

                {type === "saved" && (
                  <StatusPill
                    text="saved"
                    bg="white"
                    textColor=" #1699F8"
                    statusStyle="border border-[#1699F8] font-semibold font-archivo flex justify-between items-center "
                  />
                )}
                {type === "complete" && (
                  <StatusPill
                    text="complete"
                    bg="white"
                    textColor="#1AD48D"
                    statusStyle="border border-[#1AD48D] font-semibold font-archivo flex justify-between items-center "
                  />
                )}
                {type === "create" && (
                  <StatusPill
                    text="Active"
                    bg="#1AD48D1A"
                    textColor="#1AD48D"
                    statusStyle=" font-semibold font-archivo flex justify-between items-center "
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="text-sm text-[#4C4475]">
              {locationDetails?.country || ""}, {locationDetails?.state || ""}
            </span>
            <StatusPill
              text={bookings?.category.split("-").join(" ") || ""}
              bg="#1AD48D1A"
              textColor="#1AD48D"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image
              alt=""
              className="w-full h-[340px] object-cover"
              src={
                equipments?.imageUrl ===
                "https://user-profile0link.com/synergy/book.png"
                  ? "/assets/images/collabo.jpg"
                  : equipments?.imageUrl || "/assets/images/collabo.jpg"
              }
              width={341}
              height={192}
            />
          </div>
          <h4 className="font-semibold text-sm text-[#2A2069] hover:underline">
            {bookings?.title}
          </h4>
          <div className="text-sm text-[#4C4475] line-clamp-4">
            {bookings?.description}
          </div>
          <div className="flex items-center gap-5">
            <Button
              onClick={() =>
                router.push(
                  type === "create" ? (
                    `/collaboration/sedher-synergi/${id}`
                  ) : (
                    <PopupButton
                      url="https://calendly.com/sedher"
                      rootElement={document.getElementById("__next")}
                      text="Book Appointment"
                    />
                  )
                )
              }
              className="w-full"
              theme="outline"
            >
              {type === "create" ? (
                "Edit Details"
              ) : (
                <PopupButton
                  url="https://calendly.com/sedher"
                  rootElement={document.getElementById("__next")}
                  text="Book Appointment"
                />
              )}
            </Button>
          </div>
        </div>
      </WhiteWrapper>
    </motion.article>
  );
};

export default SynergiCard;
