import WhiteWrapper from "./WhiteWrapper";

type AboutCardProps = {
	title: string;
	description?: string;
};

const AboutCard = ({ title, description }: AboutCardProps) => {
	return (
		<WhiteWrapper title={title}>
			<article>
				<p className='font-epilogue text-dark-100 leading-[160%]'>
					{description}
				</p>
			</article>
		</WhiteWrapper>
	);
};

export default AboutCard;
