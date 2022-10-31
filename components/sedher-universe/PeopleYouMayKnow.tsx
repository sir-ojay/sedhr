import { useGetFriendsQuery } from "@/services/connections";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import AdjustableProfileCard from "../global/AdjustableProfileCard";
import WhiteWrapper from "../global/WhiteWrapper";

type PeopleYouMayKnowProps = {
	data: {
		accountType: string;
		name: string;
		profilePicture: string;
		username: string;
		description: string;
		_id: string;
	}[];
};

const PeopleYouMayKnow = () => {
	const [friends, setFriends] = useState<PeopleYouMayKnowProps>();

	const token: any = Cookies.get("sedherToken");

	const { data, error, isLoading, isSuccess, isFetching } = useGetFriendsQuery({
		token,
	});

	useEffect(() => {
		data && setFriends(data as any);
	}, [isSuccess, data]);

	return (
		<section className='space-y-3'>
			<WhiteWrapper>
				<span className='font-semibold text-dark-900'>People you may know</span>
			</WhiteWrapper>
			<section className='space-y-3'>
				{isLoading && (
					<div className='space-y-6'>
						<WhiteWrapper className='h-[140px]' />
						<WhiteWrapper className='h-[140px]' />
						<WhiteWrapper className='h-[140px]' />
						<WhiteWrapper className='h-[140px]' />
					</div>
				)}
				{friends?.data.map((account, i) => (
					<AdjustableProfileCard
						key={account._id}
						name={account.name || account.username}
						description={account?.description || "No Description"}
						accountType={account.accountType}
						href={`/profile/${account.username}`}
						username={account.username}
						// image={account.image}
						cardType='connect'
						grid={1}
					/>
				))}
			</section>
		</section>
	);
};

export default PeopleYouMayKnow;
