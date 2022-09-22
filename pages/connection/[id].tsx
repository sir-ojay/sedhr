import DefaultLayout from "@/layouts/DefaultLayout";
import AdditionalDetailsCard from "@/components/sedher-universe/AdditionalDetailsCard";
import LargeDetailsCard from "@/components/global/LargeDetailsCard";
import AboutCard from "@/components/global/AboutCard";
import LargeProfileCard from "@/components/global/LargeProfileCard";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import SkillsCard from "@/components/connection/SkillsCard";
import RecommendationCard from "@/components/connection/RecommendationCard";
import { GetServerSideProps } from "next";
import { requireAuthentication } from "hoc/requireAuthentication";

const SingleUser = () => {
	return (
		<DefaultLayout>
			<div className='flex flex-col lg:grid lg:grid-cols-9 gap-8'>
				<div className='col-span-6 space-y-5'>
					<LargeDetailsCard type='account' />
					<AboutCard
						title='About Me'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
					dolorum, earum dolorem veritatis molestiae obcaecati consequatur nemo
					quis delectus at. Ullam distinctio quo ea tenetur suscipit neque,
					ducimus et doloremque nisi, magni, sunt eos reiciendis voluptate
					 laboriosam facilis, fuga culpa officia recusandae
					accusantium saepe id tempore.'
					/>
					<WhiteWrapper>
						<LargeProfileCard
							avatarShape='circle'
							title='Experience'
							type='experience'
						/>
					</WhiteWrapper>
					<WhiteWrapper>
						<LargeProfileCard
							//   avatarShape="circle"
							title='Education'
							type='education'
						/>
					</WhiteWrapper>
					<WhiteWrapper>
						<LargeProfileCard
							//   avatarShape="circle"
							title='licenses & certifications'
							type='licenses-certifications'
						/>
					</WhiteWrapper>
					<SkillsCard
						skills={[
							"Communication",
							"Ceneral Medicine",
							"Detail Oriented",
							"Leadership",
							"Psychiatry",
						]}
					/>
					<RecommendationCard />
				</div>
				<AdditionalDetailsCard type='experience' />
			</div>
		</DefaultLayout>
	);
};

export default SingleUser;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
