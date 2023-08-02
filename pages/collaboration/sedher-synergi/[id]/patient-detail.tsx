import React, { useState, useEffect } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import Input from "@/components/global/Input";
import GoBackButton from "@/components/global/GoBackButton";
import Button from "@/components/global/Button";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useGetSnergiQuery } from "@/services/collaborations";
import { Snergi } from "@/types/collaboration";
import { useCreateBookingMutation } from "@/services/collaborations";
import { useUploadDocumentMutation } from "@/services/upload";
import { toast } from "react-toastify";

const PatientDetail = () => {
  const router = useRouter();
  const [snergiData, setSnergiData] = useState<Snergi>();
  //   console.log(snergiData);

  const token: any = Cookies.get("sedherToken");

  const { data, isSuccess } = useGetSnergiQuery({
    token,
    id: router.query.id?.toString()!,
  });

  useEffect(() => {
    // console.log(data);
    // @ts-ignore: Unreachable code error
    data && setSnergiData(data?.data);
  }, [isSuccess, data]);

  const [value, setValue] = useState({
    title: "",
    firstName: "",
    lastName: "",
    condition: "",
    gender: "",
    age: "",
  });

  const [Booking, { isLoading }] = useCreateBookingMutation();
  const [upload] = useUploadDocumentMutation();
  const handleClick = () => {
    router.back();
  };

  const methods = useForm({
    defaultValues: {
      image: "",
    },
    mode: "onChange",
  });

  const {
    formState: { isValid },
    watch,
  } = methods;

  const photoID = watch("image");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const url = (await upload({
        file: photoID as any,
        token: token as string,
      }).unwrap()) as any;

      const data = {
        token,
        id: router.query.id?.toString()!,
        body: {
          description: value.title,
          patients: [
            {
              firstName: value.firstName,
              lastName: value.lastName,
              age: value.age,
              gender: value.gender,
              condition: value.condition,
              attachments: [url.data[0]],
            },
          ],
          appointment: JSON.parse(
            localStorage.getItem("appointment") as string
          ),
        } as any,
      };
      // console.log("booking data", data);
      const result = await Booking(data).unwrap();
      toast.success("Your Booking data has been saved");
      // console.log("result", result);
      //   To route to view
      router.push(`/collaboration/sedher-synergi/${snergiData?.id}/edit/view`);
    } catch (err: any) {
      console.log("err", err);
      toast.error(err?.data?.message || err.data.error);
    }
  };
  return (
    <DefaultLayout>
      <GoBackButton label="1600 W Universal Machine Centre" />

      {/* <WhiteWrapper className="flex justify-between mt-5">
        <div>
          <b>Patient Information</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Button type="submit">Add Patient Details</Button>
      </WhiteWrapper> */}

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <WhiteWrapper className="mt-5">
            <div className="space-y-6">
              <b>Summary</b>
              <Input
                name="title"
                label="Description"
                placeholder="description..."
                value={value.title}
                onChange={(e) =>
                  setValue((prev) => {
                    return { ...prev, title: e.target.value };
                  })
                }
                rules={["required"]}
              />
            </div>
          </WhiteWrapper>

          <WhiteWrapper className="mt-5">
            <div className="my-5">
              <b>Patient Details</b>
            </div>

            <div className=" grid grid-cols-2 gap-4 max-[650px]:grid-cols-1">
              <Input
                name="First name"
                label="First name"
                placeholder="first name"
                value={value.firstName}
                onChange={(e) =>
                  setValue((prev) => {
                    return { ...prev, firstName: e.target.value };
                  })
                }
                rules={["required"]}
              />
              <Input
                name="Last name"
                label="Last name"
                placeholder="last name"
                value={value.lastName}
                onChange={(e) =>
                  setValue((prev) => {
                    return { ...prev, lastName: e.target.value };
                  })
                }
                rules={["required"]}
              />

              <Input
                name="Gender"
                label="Gender"
                placeholder="gender"
                value={value.gender}
                onChange={(e) =>
                  setValue((prev) => {
                    return { ...prev, gender: e.target.value };
                  })
                }
                rules={["required"]}
              />
              <Input
                name="Age"
                label="Age"
                placeholder="age"
                rules={["required"]}
                value={value.age}
                onChange={(e) =>
                  setValue((prev) => {
                    return { ...prev, age: e.target.value };
                  })
                }
              />
              <Input
                name="Condition"
                label="Condition"
                placeholder="condition"
                rules={["required"]}
                value={value.condition}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, condition: e.target.value }))
                }
              />

              <Input name="image" type="file" label="Attach image" />
            </div>
          </WhiteWrapper>
          <div className="flex justify-between mt-5">
            <Button theme="outline" onClick={handleClick}>
              Back
            </Button>
            <Button type="submit" loading={isLoading}>
              Submit Booking
            </Button>
          </div>
        </form>
      </FormProvider>
    </DefaultLayout>
  );
};

export default PatientDetail;
