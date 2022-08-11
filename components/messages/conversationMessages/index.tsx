import React from "react";
import LeftMessage from "./LeftMessage";
import RightMessage from "./RightMessage";

const ConversationMessage = () => {
	return (
		<div>
			<RightMessage />
			<LeftMessage />
		</div>
	);
};

export default ConversationMessage;
