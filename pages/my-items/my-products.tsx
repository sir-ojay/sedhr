import { useState } from "react";
import { motion } from "framer-motion";
import ListNav from "@/components/global/ListNav";
import ListSortHeader from "@/components/global/ListSortHeader";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import MyItemsNav from "@/components/my-items/MyItemsNav";
import DefaultLayout from "@/layouts/DefaultLayout";

type MyProductsProps = {
	defaultGrid: number;
	navs: {
		name: string;
		href: string;
	}[];
};

const MyProducts = ({ navs, defaultGrid }: MyProductsProps) => {
	const [grid, setGrid] = useState(defaultGrid);

	return (
		<DefaultLayout title='Sedher | My item'>
			<div className='grid grid-cols-6 gap-8'>
				<section className='col-span-2 space-y-6'>
					<MyItemsNav />
				</section>
				<section className='col-span-4 space-y-6'>
					<ListSortHeader setGrid={setGrid} defaultGrid={defaultGrid} />
					<ListNav navs={navs} />

					<WhiteWrapper>
						<section
							className={`grid ${
								grid === 2
									? "grid-cols-2"
									: grid === 3
									? "grid-cols-3"
									: grid === 4
									? "grid-cols-4"
									: grid === 5
									? "grid-cols-5"
									: "grid-cols-1"
							}`}>
							<motion.div layout>1</motion.div>
							<motion.div layout>1</motion.div>
						</section>
					</WhiteWrapper>
				</section>
			</div>
		</DefaultLayout>
	);
};

export default MyProducts;

MyProducts.defaultProps = {
	defaultGrid: 2,
	navs: [
		{
			name: "Product",
			href: "/my-items/my-products?t=product",
		},
		{
			name: "Pending",
			href: "/my-items/my-products?t=pending",
		},
		{
			name: "Purchase",
			href: "/my-items/my-products?t=purchase",
		},
	],
};
