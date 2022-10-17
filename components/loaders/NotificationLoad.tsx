import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NotificationLoad = () => {
	const loadCards: any = Array(9).fill(1);
	return loadCards.map((_: any, i: any) => (
		<div className='card-skeleton !flex gap-8 !pb-[20px] ' key={i}>
			<div>
				<Skeleton circle width={60} height={60} />
			</div>
			<div className='w-full md:w-[740px] '>
				<Skeleton count={1} className='!h-20 w-full' />
			</div>
			{/* <div className='w-[150px] w-max-[60%]'>
				<Skeleton count={1} className='!h-[44px]' />
			</div> */}
		</div>
	));
};
export default NotificationLoad;
