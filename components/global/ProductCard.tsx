import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import WhiteWrapper from "./WhiteWrapper";

type ProductCardprops = {
  type: string;
};

const ProductCard = ({ type = "product" }: ProductCardprops) => {
  return (
    <motion.article layout>
      <WhiteWrapper>
        <header className="flex items-center justify-between font-epilogue mb-2">
          <div
            title="Patient monitor Bm5 Bionet"
            className="font-semibold text-lg text-dark-900"
          >
            Patient monitor Bm5 Bionet
          </div>
          <button type="button">
            <img
              src="/assets/icons/layouts/more.svg"
              alt="see more"
              title="see more"
            />
          </button>
        </header>

        <div className="mb-3">
          <p className="text-sm text-dark-100 mb-3">
            Patient Monitor BM5 Bionet USA please click here to download ....
          </p>
          <div className="text-sm">
            Post by:{" "}
            <Button tag="a" theme="secondary">
              Tunde and son limited
            </Button>
          </div>
        </div>

        <div className="rounded-xl mb-3">
          <Image
            width={1000}
            height={500}
            layout="responsive"
            src="/assets/images/productCard.jpg"
            alt="post"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="font-semibold text-lg text-dark-900">₦700,000.00</div>
          <button
            type="button"
            className="bg-[#FF39561A] px-[10px] py-[6px] rounded-[80px] text-sm font-semibold text-[#FF3956]"
          >
            Monitor
          </button>
        </div>

        {type === "product" && (
          <Button
            theme="plain"
            size="sm"
            className="w-full text-primary border border-primary"
          >
            Purchase
          </Button>
        )}

        {(type === "pending" || type === "purchase") && (
          <div>
            <div className="bg-[#D6DDEB] h-[6px] mb-2">
              <div className="h-full bg-[#44BE9D] w-1/4" />
            </div>
            <div className="font-semibold text-sm text-[#2A2069]">
              Step({type === "pending" ? 2 : 3}/3){" "}
              <span className="font-normal text-[ #4C4475]">
                Transportation
              </span>
            </div>
          </div>
        )}
      </WhiteWrapper>
    </motion.article>
  );
};

export default ProductCard;
