import { LoginResponse } from "@/types/auth/auth";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type OnboardingHeaderProps = {
  steps: {
    title: string;
    step: Number;
    icon?: string;
    description?: string;
  }[];
  stepsMobile: {
    title: string;
    step: Number;
    icon?: string;
    description?: string;
  }[];
  step: number;
  subStep?: number;
  totalSubSteps?: number;
  children?: React.ReactNode;
};

const OnboardingHeader = ({
  step,
  steps,
  stepsMobile,
  subStep = 0,
  children,
  totalSubSteps = 4,
}: OnboardingHeaderProps) => {
 
	const [user, setUser] = useState<LoginResponse>();
	const location = useRouter();

	useEffect(() => {
		try {
			const user = JSON.parse(Cookies.get("sedherUser") || "{}");
			// user.hasOnboarded ? location.push("/feed") : setUser(user);
		} catch (error) {
			console.log(error);
		}
	}, []);

	const logout = () => {
		Cookies.remove("sedherToken");
		Cookies.remove("sedherUser");
		location.push("/auth/signin");
	};
 

  return (
    <div>
      <header>
        <nav className="hidden xl:block bg-white">
          <ul className="bg-white pt-16 pb-4 flex justify-between items-center gap-5 px-7 w-[calc(100%-272px)] fixed right-0 z-10">
            {steps.map((_step, index) => (
              <li
                key={_step.title + index}
                className={`${_step.title === "dash" ? "flex-1" : null}`}
              >
                {_step.title !== "dash" ? (
                  <Link
                    href={`/onboarding/${_step.title.toLowerCase()}`}
                    className="flex gap-4 cursor-pointer"
                  >
                    <div
                      className={`w-14 h-14 ${
                        step === _step.step
                          ? "bg-primary"
                          : step > _step.step
                          ? "bg-[#44BE9D]"
                          : "bg-[#D4EBEB]"
                      } rounded-full flex justify-center items-center`}
                    >
                      <img
                        className={`${
                          step === _step.step ? "tab-active" : null
                        }`}
                        src={`/assets/icons/layouts/onboarding-layout/${
                          step > _step.step ? "completed" : _step.icon
                        }.svg`}
                        alt={_step.icon}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-lg font-epilogue leading-[160%] text-title">
                        {_step.title}
                      </div>
                      <div
                        className={`font-epilogue ${
                          step === _step.step
                            ? "text-primary"
                            : "text-[#899A9A]"
                        }`}
                      >
                        {_step.description}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <>
                    {index !== steps.length - 1 && (
                      <div key={index} className="h-[1px] bg-[#D4EBEB]" />
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <nav className="xl:hidden bg-white px-6 py-5 fixed-top flex justify-between">
          <div>
            <button
              onClick={logout}
              type="button"
              tabIndex={0}
              className="flex items-center w-full px-4 py-3 gap-x-4 transition-all ease-in text-primary bg-[#E7F6FD] rounded-[5px]"
            >
              <div className="_invert">
                <img
                  src={`/assets/icons/layouts/logout.svg`}
                  alt=""
                  title="logout"
                  className=""
                />
              </div>
              <div className="leading-[160%] font-medium">Logout</div>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <div className="font-semibold font-epilogue leading-[160%] text-title">
                {stepsMobile[step - 1].title}
              </div>
              <div className={`font-epilogue text-sm text-[#899A9A]`}>
                Step {step}/4
              </div>
            </div>
            <div
              className={`w-10 h-10 bg-primary rounded-full flex justify-center items-center`}
            >
              <img
                className={`tab-active`}
                src={`/assets/icons/layouts/onboarding-layout/${
                  stepsMobile[step - 1].icon
                }.svg`}
                alt="account"
              />
            </div>
          </div>
        </nav>
      </header>

      {/* children steps */}
      {step === 3 && (
        <section className="pt-[85px] xl:pt-[160px] px-7">
          <hr className="hidden md:block" />
          <div className="py-3 md:py-[30px]">
            <div className="flex justify-between items-center">
              <div className="space-y-[5px]">
                <h2 className="text-dark-900 text-lg md:text-[26px] font-semibold font-clash">
                  Enter your Detail
                </h2>
                <p className="text-dark-100 text-sm md:text-base font-epilogue">
                  To keep using this account after the trial ends, set up a
                  subscription
                </p>
              </div>
              <div className="hidden md:block py-3 px-12 bg-[#F47D5B26] text-secondary font-epilogue text-lg font-semibold rounded-[30px]">
                Step {subStep > totalSubSteps ? totalSubSteps : subStep}/
                {totalSubSteps}
              </div>
            </div>
          </div>
        </section>
      )}

      <section
        className={`${
          step !== 3 ? "py-[100px] xl:py-[140px]" : null
        } bg-[#e7f6fd66] p-6 xl:p-9 min-h-screen`}
      >
        {children}
      </section>
    </div>
  );
};

export default OnboardingHeader;

OnboardingHeader.defaultProps = {
  steps: [
    {
      title: "Account",
      description: "Step 1/4",
      icon: "account",
      step: 1,
    },
    {
      title: "dash",
    },
    {
      title: "Payment",
      description: "Step 2/4",
      icon: "payment",
      step: 2,
    },
    {
      title: "dash",
    },
    {
      title: "Verification",
      description: "Step 3/4",
      // icon: "verification",
      icon: "payment",
      step: 3,
    },
    {
      title: "dash",
    },
    {
      title: "Start",
      description: "Step 4/4",
      // icon: "start",
      icon: "payment",
      step: 4,
    },
  ],
  stepsMobile: [
    {
      title: "Account",
      description: "Step 1/4",
      icon: "account",
      step: 1,
    },
    {
      title: "Payment",
      description: "Step 2/4",
      icon: "payment",
      step: 2,
    },
    {
      title: "Verification",
      description: "Step 3/4",
      // icon: "verification",
      icon: "payment",
      step: 3,
    },
    {
      title: "Start",
      description: "Step 4/4",
      // icon: "start",
      icon: "payment",
      step: 4,
    },
  ],
};
