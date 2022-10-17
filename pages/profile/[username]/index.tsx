import RecommendationCard from "@/components/connection/RecommendationCard";
import SkillsCard from "@/components/connection/SkillsCard";
import AboutCard from "@/components/global/AboutCard";
import LargeDetailsCard from "@/components/global/LargeDetailsCard";
import LargeProfileCard from "@/components/global/LargeProfileCard";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useState } from "react";

const ProfilePage = () => {
	const [showEditAboutModal, setShowEditAboutModal] = useState(false);

	const editAbout = () => {
		setShowEditAboutModal(true);
	};

	return (
		<DefaultLayout title='Sedher | Profile'>
			<div className='space-y-5'>
				<LargeDetailsCard type='profile' />
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
		</DefaultLayout>
	);
};

export default ProfilePage;
