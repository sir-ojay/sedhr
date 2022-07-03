import { useState } from "react";
import ListNav from "@/components/global/ListNav";
import ListSortHeader from "@/components/global/ListSortHeader";
import DefaultLayout from "@/layouts/DefaultLayout";
import GridContainer from "@/components/global/GridContainer";
import ProductCard from "@/components/global/ProductCard";
import { useRouter } from "next/router";
import MyItemsWrapper from "@/components/my-items/MyItemsWrapper";

type MyProductsProps = {
	defaultGrid: number;
	navs: {
		name: string;
		href: string;
	}[];
};

const MyProducts = ({ navs, defaultGrid }: MyProductsProps) => {
	const [grid, setGrid] = useState(defaultGrid);
	const {
		query: { t },
	} = useRouter();

	return (
		<DefaultLayout title='Sedher | My item'>
			<MyItemsWrapper>
				<ListSortHeader
					title='My Product'
					results={73}
					setGrid={setGrid}
					defaultGrid={defaultGrid}
				/>
				<ListNav navs={navs} />

				{t === "product" ? (
					<GridContainer grid={grid}>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
							(card) => (
								<ProductCard key={card} type='product' />
							)
						)}
					</GridContainer>
				) : t === "pending" ? (
					<GridContainer grid={grid}>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
							(card) => (
								<ProductCard key={card} type='pending' />
							)
						)}
					</GridContainer>
				) : (
					<GridContainer grid={grid}>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
							(card) => (
								<ProductCard key={card} type='purchase' />
							)
						)}
					</GridContainer>
				)}
			</MyItemsWrapper>
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
