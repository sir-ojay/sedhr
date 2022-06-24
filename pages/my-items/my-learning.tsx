import MyItemsNav from "@/components/my-items/MyItemsNav";
import DefaultLayout from "@/layouts/DefaultLayout";

const MyLearning = () => {
	return (
		<DefaultLayout title='Sedher | My item'>
			<div className='grid grid-cols-6 gap-8'>
				<section className='col-span-2 space-y-6'>
					<MyItemsNav />
				</section>
				<section className='col-span-4 space-y-6'></section>
			</div>
		</DefaultLayout>
	);
};

export default MyLearning;
