import WhiteWrapper from "./WhiteWrapper";

type AboutCardProps = {
	title: string;
};

const AboutCard = ({ title }: AboutCardProps) => {
	return (
		<WhiteWrapper title={title}>
			<article>
				<p className='font-epilogue text-dark-100 leading-[160%]'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
					dolorum, earum dolorem veritatis molestiae obcaecati consequatur nemo
					quis delectus at. Ullam distinctio quo ea tenetur suscipit neque,
					ducimus et doloremque nisi, magni, sunt eos reiciendis voluptate
					maxime cum velit recusandae veritatis aut accusamus quod! Totam cumque
					quaerat sequi? In consequatur vero quasi minus obcaecati, neque
					voluptatibus distinctio qui quam tempora deleniti! At, hic blanditiis.
					Excepturi laboriosam facilis, fuga culpa officia recusandae
					accusantium saepe id tempore.
				</p>
			</article>
		</WhiteWrapper>
	);
};

export default AboutCard;
