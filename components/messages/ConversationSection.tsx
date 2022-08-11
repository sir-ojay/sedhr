import React from "react";
import WhiteWrapper from "../global/WhiteWrapper";
import ConversationBottom from "./ConversationBottom";
import { ConversationHead } from "./ConversationHead";
import ConversationMessage from "./conversationMessages";

const ConversationSection = () => {
	return (
		<WhiteWrapper>
			<ConversationHead />
			<ConversationMessage />
			<ConversationBottom />
		</WhiteWrapper>
	);
};

export default ConversationSection;
