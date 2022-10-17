import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NotificationLoad = () => {
	const loadCards = Array(9).fill(1);
	return loadCards.map((_, i) => (
		<div className='card-skeleton !flex justify-between  gap-10 mb-5' key={i}>
			<div className='!flex space-x-8'>
				<div>
					<Skeleton circle width={60} height={60} />
				</div>
				<div className='w-[740px] w-max-[100%]'>
					<Skeleton count={1} className='!h-20' />
				</div>
			</div>
			{/* <div className='w-[150px] w-max-[60%]'>
				<Skeleton count={1} className='!h-[44px]' />
			</div> */}
		</div>
	));
};
export default NotificationLoad;
