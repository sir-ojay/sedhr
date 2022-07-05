import AdjustableProfileCard from "../global/AdjustableProfileCard";
import WhiteWrapper from "../global/WhiteWrapper";

type GroupsForYouProps = {
	accounts: {
		name: string;
		description: string;
		accountType: string;
		image?: string;
	}[];
};

const GroupsForYou = ({ accounts }: GroupsForYouProps) => {
	return (
		<section className='space-y-3'>
			<WhiteWrapper>
				<span className='font-semibold text-dark-900'>Groups for you</span>
			</WhiteWrapper>
			<section className='space-y-3'>
				{accounts.map((account, i) => (
					<AdjustableProfileCard
						key={account.name + i}
						name={account.name}
						image={account.image}
						description={account.description}
						cardType='group'
						grid={1}
					/>
				))}
			</section>
		</section>
	);
};

export default GroupsForYou;

GroupsForYou.defaultProps = {
	accounts: [
		{
			name: "Adagio CME-CPD Training Service",
			description: "Wed, Jun 1 - Fri, Jun 10",
			image: "/assets/images/square-avatar-1.png",
		},
		{
			name: "Adagio CME-CPD Training Service",
			description: "Wed, Jun 1 - Fri, Jun 10",
			image: "/assets/images/square-avatar-1.png",
		},
		{
			name: "Adagio CME-CPD Training Service",
			description: "Wed, Jun 1 - Fri, Jun 10",
			image: "/assets/images/square-avatar-1.png",
		},
	],
};
