import Image from "next/image";
import Avatar from "../global/Avatar";
import Button from "../global/Button";
import WhiteWrapper from "../global/WhiteWrapper";

const FeedPost = () => {
	return (
		<WhiteWrapper>
			<article>
				<header className='flex justify-between items-start'>
					<div className='flex gap-3 mb-4'>
						<div className='hidden xl:block'>
							<Avatar shape='square' name='Eko Diagnostic Centre' size={64} />
						</div>
						<div className='xl:hidden'>
							<Avatar shape='square' name='Eko Diagnostic Centre' size={48} />
						</div>
						<div className='space-y-[1px]'>
							<div className='font-semibold text-sm xl:text-base text-dark-900'>
								Eko Diagnostic Centre
							</div>
							<div className='text-xs xl:text-sm text-dark-100'>
								Diagnostic centres
							</div>
							<div className='text-xs xl:text-sm text-accents-brown'>
								Patient care centres
							</div>
						</div>
					</div>
					<button type='button' className='transform rotate-90'>
						<img
							src='/assets/icons/layouts/more.svg'
							alt='see more'
							title='see more'
						/>
					</button>
				</header>
				<section className='space-y-5'>
					<p className='text-sm xl:text-base leading-[160%]'>
						Lifebridge medical diagnostics centre has been operating in Nigeria
						for 10+ years. It has become the one of the most reliable centers to
						conduct 1000+ unique medical tests. We pride ourselves for
						maintaining the highest level of integrity and care to give our
						patients the best service possible.{" "}
						<Button tag='a' theme='secondary' underline={false}>
							Read more....
						</Button>
					</p>
					<div className='rounded-xl'>
						<Image
							width={1000}
							height={500}
							layout='responsive'
							src='/assets/images/feed/postImage.jpg'
							alt='post'
						/>
					</div>
					<div className='flex items-center justify-between'>
						<div className='space-x-4 text-xs text-dark-100 xl:text-base'>
							<span>354 Likes</span>
							<span>25 Comments</span>
						</div>
						<button type='button' className='flex items-center gap-1'>
							<div>
								<img
									src='/assets/icons/feed/like.svg'
									alt='see more'
									title='see more'
								/>
							</div>
							<span className='text-dark-100 text-xs xl:text-sm font-medium'>
								Like
							</span>
						</button>
					</div>
					<hr />
					<div className='flex items-center justify-between'>
						<button type='button' className='flex items-center gap-2 xl:gap-4'>
							<div>
								<img
									src='/assets/icons/feed/comment.svg'
									alt='see more'
									title='see more'
								/>
							</div>
							<span className='text-dark-100 text-xs xl:text-sm font-medium'>
								Comment
							</span>
						</button>
						<button type='button' className='flex items-center gap-2 xl:gap-4'>
							<div>
								<img
									src='/assets/icons/feed/share.svg'
									alt='see more'
									title='see more'
								/>
							</div>
							<span className='text-dark-100 text-xs xl:text-sm font-medium'>
								Share
							</span>
						</button>
					</div>
				</section>
			</article>
		</WhiteWrapper>
	);
};

export default FeedPost;
