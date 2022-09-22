import ListNav from "@/components/global/ListNav";
import ListSortHeader from "@/components/global/ListSortHeader";
import MessagesWrapper from "@/components/messages/MessagesWrapper";
import EmailMessage from "@/components/messages/EmailMessage";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ChatProfileHeader from "@/components/messages/ChatProfileHeader";
import ConversationSection from "@/components/messages/ConversationSection";
import { FormProvider, useForm } from "react-hook-form";

type MessagesProps = {
	defaultGrid: number;
	navs: {
		name: string;
		href: string;
	}[];
};
const Messages = ({ navs, defaultGrid }: MessagesProps) => {
	const [grid, setGrid] = useState(defaultGrid);
	const {
		query: { view },
	} = useRouter();
	const methods = useForm({
		defaultValues: {
			message: "",
		},
		mode: "onChange",
	});
	return (
		<DefaultLayout title='Sedher | Messages'>
			<FormProvider {...methods}>
				<section className='space-y-6'>
					<ListSortHeader
						title='Messages'
						results={73}
						setGrid={setGrid}
						defaultGrid={defaultGrid}
					/>

					<ListNav navs={navs} />
					{(view === "chats" || view === undefined) && (
						<MessagesWrapper>
							<ChatProfileHeader />
							<ConversationSection />
						</MessagesWrapper>
					)}
					{view === "emails" && (
						<MessagesWrapper>
							<ChatProfileHeader />
							{/* <EmailMessage /> */}
							{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
								(card) => (
									<EmailMessage />
								)
							)}
						</MessagesWrapper>
					)}
				</section>
			</FormProvider>
		</DefaultLayout>
	);
};

export default Messages;

Messages.defaultProps = {
	defaultGrid: 4,
	navs: [
		{
			name: "Chats",
			href: "/messages?view=chats",
		},
		{
			name: "Emails",
			href: "/messages?view=emails",
		},
	],
};
