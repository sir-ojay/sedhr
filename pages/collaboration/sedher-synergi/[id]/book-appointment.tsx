import DefaultLayout from "@/layouts/DefaultLayout";
import Calendr from "@/components/global/Calendar";
import BigCalendar from "@/components/global/BigCalendar";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import Button from "@/components/global/Button";

const BookAppointment = () => {
  return (
    <DefaultLayout>
      <WhiteWrapper className="mb-5  flex ">
        <b className="text-lg mr-5">Book appointment</b>
        <Button
          theme="outline"
          size="sm"
          className="border text-pr border-[#DDE4F6]"
        >
          Today
        </Button>
      </WhiteWrapper>

      <div className=" flex flex-row max-[650px]:flex-col mt-5">
        <div>
          <Calendr />
        </div>

        <BigCalendar />
      </div>
    </DefaultLayout>
  );
};

export default BookAppointment;
