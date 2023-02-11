import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import LabelValue from "@/components/global/LabelValue";
import StatusPill from "@/components/global/StatusPill";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import {
  useGetH2HQuery,
  useCreateMessageMutation,
} from "@/services/collaborations";
import { requireAuthentication } from "hoc/requireAuthentication";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();

  const token: any = Cookies.get("sedherToken");

  const { data, isLoading } = useGetH2HQuery({
    token,
    id: router.query.id?.toString()!,
  });
  console.log(data?.data?.owner)
  const [chat] = useCreateMessageMutation();

  const startChat = async () => {
    const result = await chat({
      token,
      body: { content: "Hello ", receiverId: data?.data?.owner}, 
    }).unwrap();
    router.push("/collaboration/sedher-h2h-commerce/chats");
  };
  return (
    <DefaultLayout title="Sedher | Collaboration | RFP">
      <div className="grid grid-cols-6 gap-8">
        <section className="col-span-4 space-y-6">
          <WhiteWrapper>
            <div className="rounded-xl overflow-hidden">
              <Image
                className="w-full h-[300px] object-cover"
                src={
                  data?.data?.images[0] === "cloudinary-link-here"
                    ? "/assets/images/collabo.jpg"
                    : data?.data.images[0] || ""
                }
                width={300}
                height={269}
                layout="responsive"
                alt=""
              />
            </div>
          </WhiteWrapper>

          <WhiteWrapper>
            <div className="space-y-4">
              <h4 className="font-semibold text-xl font-archivo text-[#2A2069]">
                {data?.data.productDetails.name}
              </h4>
              <p className="text-dark-100 leading-8">
                {data?.data.productDetails.description}
              </p>
            </div>
          </WhiteWrapper>
          <WhiteWrapper>
            <div className="space-y-4">
              <h4 className="font-semibold text-xl font-archivo text-black">
                cost and benefits
              </h4>
              <div className="space-y-4">
                {/* <LabelValue
									label='Amount to be pay upfront'
									value='18%'
									info='icon'
								/> */}
                {/* <LabelValue
									label='Dismantling & loading costs (binding)'
									value='NGN 300,000'
									info='icon'
								/> */}
                <LabelValue
                  label={"Price"}
                  value={` NGN ${
                    data?.data?.paymentDetails?.prices[0]?.value || "N/A"
                  }`}
                />
                {/* <LabelValue label=Plus VAT' value='NGN 30,000' />
								<LabelValue label='Shipping Cost' value='NGN 30,000' />
								<LabelValue
									label='payment terms'
									value='100% payment prior to collection'
								/> */}
              </div>
            </div>
          </WhiteWrapper>
          <WhiteWrapper>
            <div className="space-y-4">
              <h4 className="font-semibold text-xl font-archivo text-black">
                Techincal Details
              </h4>
              <div className="space-y-4">
                <LabelValue
                  label="Weight Approx"
                  value={data?.data.technicalDetails.weight || "N/A"}
                />
                <LabelValue
                  label="Dimensions(length,width and height)"
                  value={data?.data.technicalDetails.dimensions || "N/A"}
                />
              </div>
            </div>
          </WhiteWrapper>

          <div className="flex justify-between !mt-[47px]">
            <Button onClick={() => router.back()} theme="outline">
              Back
            </Button>
            {/* <Button
							onClick={() =>
								router.push(
									"/collaboration/sedher-h2h-commerce/thomas-clinics/order-items"
								)
							}>
							Place Order
						</Button> */}
          </div>
        </section>
        <section className="col-span-2 space-y-6">
          <WhiteWrapper>
            <div>
              <div className="flex w-full gap-5">
                <div>
                  <Avatar name="Thomas clinics" rounded size={100} />
                </div>
                <div className="w-full space-y-2">
                  <div className="flex justify-between">
                    <h3 className="text-2xl font-semibold text-dark-900">
                      Thomas clinics
                    </h3>
                    <StatusPill
                      text="Service"
                      bg="#FF39561A"
                      textColor="#FF3956"
                    />
                  </div>
                  <div className="text-lg space-x-3">
                    <span className="text-dark-100">Dental clinics</span>
                    <span className="text-[#F47D5B]">
                      Patient care centres{" "}
                    </span>
                  </div>
                  <div className="text-base text-dark-100">Friday 13 June</div>
                </div>
              </div>
              <Button
                theme="outline"
                className="w-full mt-5"
                onClick={() => router.push("/connection/1")}
              >
                view profile
              </Button>
            </div>
          </WhiteWrapper>

          <WhiteWrapper>
            <div className="sticky  ">
              <div className="space-y-4">
                <h4 className="font-semibold text-xl font-archivo text-black">
                  Item details
                </h4>
                <div className="space-y-4">
                  <LabelValue
                    label="Name"
                    value={data?.data.productDetails.name || "N/A"}
                    orientation="vertical"
                  />
                  <LabelValue
                    label="Item Description"
                    value={data?.data.itemDetails.description || "N/A"}
                    orientation="vertical"
                  />
                  <LabelValue
                    label="Model / type"
                    value={data?.data.itemDetails.modelOrType || "N/A"}
                    orientation="vertical"
                  />
                  <LabelValue
                    label="Year of manufacture"
                    value={"N/A"}
                    orientation="vertical"
                  />
                  {/* <LabelValue
										label='Item available from'
										value='Immediately'
										orientation='vertical'
									/>
									<LabelValue
										label='Item condition'
										value='unchecked'
										orientation='vertical'
									/> */}
                  <LabelValue
                    label="Pickup location"
                    orientation="vertical"
                    value={"N/A"}
                    // isLink={true}
                  />
                </div>
              </div>
            </div>
          </WhiteWrapper>

          <Button theme="outline" className="w-full mt-5" onClick={startChat}>
            Start Chat
          </Button>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Details;
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (context) => {
    return {
      props: {
        customers: [],
      },
    };
  }
);
