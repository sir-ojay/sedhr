import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import StatusPill from "@/components/global/StatusPill";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import Link from "next/link";
import { useGetSnergiQuery } from "@/services/collaborations";
import { Snergi } from "@/types/collaboration";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import moment from "moment";

const ServiceCard = () => {
  const router = useRouter();
  const [snergiData, setSnergiData] = useState<Snergi>();
//   console.log(snergiData);

  const token: any = Cookies.get("sedherToken");

  const { data, isSuccess } = useGetSnergiQuery({
    token,
    id: router.query.id?.toString()!,
  });

  useEffect(() => {
    console.log(data);
    data && setSnergiData(data?.data);
  }, [isSuccess, data]);

  return (
    <>
      <WhiteWrapper>
        <div className="space-y-7">
          <div className="flex  justify-between">
            <StatusPill
              text="Service"
              bg="#FF39561A"
              textColor="#FF3956"
              statusStyle=" font-semibold font-archivo flex justify-between items-center "
            />
            <span className="text-[#616A6A] pl-3 pt-3 text-sm font-normal">
              {moment(snergiData?.createdAt).format("DD, MMMM yy")}
            </span>
          </div>
          <div className="flex  gap-3 mb-3">
            <Avatar
              href="/connection/1"
              shape="square"
              size={84}
              name={snergiData?.owner?.name!}
              image={snergiData?.owner?.profilePicture!}
            />
            <div className="w-full flex justify-between">
              <div>
                <Link
                  href="/connection/1"
                  className="font-semibold text-xl text-[#2A2069] hover:underline"
                >
                  {snergiData?.owner?.name}
                </Link>
                {/* <div className=" text-dark-400 text-base font-normal font-epilogue text-dark-100">
                  Dental clinics
                </div> */}
                <div className="text-base font-normal text-accents-brown">
                  {snergiData?.owner?.accountType}
                </div>
              </div>
            </div>
          </div>
          <Button
            theme="plain"
            size="sm"
            className=" w-full text-primary border  border-[#DDE4F6]"
          >
            view profile
          </Button>
        </div>
      </WhiteWrapper>
    </>
  );
};

export default ServiceCard;
