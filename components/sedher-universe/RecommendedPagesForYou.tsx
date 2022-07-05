import AdjustableProfileCard from "../global/AdjustableProfileCard";
import WhiteWrapper from "../global/WhiteWrapper";

type RecommendedPagesForYouProps = {
	accounts: {
		name: string;
		description: string;
		accountType: string;
		image?: string;
	}[];
};

const RecommendedPagesForYou = ({ accounts }: RecommendedPagesForYouProps) => {
	return (
		<section className='space-y-3'>
			<WhiteWrapper>
				<span className='font-semibold text-dark-900'>
					Recommended pages for you
				</span>
			</WhiteWrapper>
			<section className='space-y-3'>
				{accounts.map((account, i) => (
					<AdjustableProfileCard
						key={account.name + i}
						name={account.name}
						description={account.description}
						accountType={account.accountType}
						image={account.image}
						cardType='page'
						grid={1}
					/>
				))}
			</section>
		</section>
	);
};

export default RecommendedPagesForYou;

RecommendedPagesForYou.defaultProps = {
	accounts: [
		{
			name: "Ajayi Damilola",
			description: "Physiotherapists",
			accountType: "HCP",
			image: "/assets/icons/layouts/profile.png",
		},
		{
			name: "Richard Ingwe",
			description: "Medical Physicist",
			accountType: "HCP",
			image: "/assets/icons/layouts/profile.png",
		},
		{
			name: "Wale Abba",
			description: "Manager",
			accountType: "Business",
			image: "/assets/icons/layouts/profile.png",
		},
	],
};
