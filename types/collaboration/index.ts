export type GetRFPSResponse = {
	message: string;
	data: RFP[];
};

export type GetRFPSRequest = {
	token: string;
};

export type RFP = {
	_id: string;
	userId: string;
	productName: string;
	category: string;
	description: string;
	proposal: {
		description: [];
		timelines: [];
	};
	communications: {
		channels: string[];
		responseToEmail: string;
		responseToFeedback: string;
		note: string;
	};
	timelines: {
		fieldName: string;
		value: string;
	}[];
	paymentDetails: {
		paymentType: "FIXED";
		prices: {
			fieldName: string;
			value: number;
		}[];
	};
	code: number;
	status: "pending" | "approved" | "rejected";
	createdAt: string;
	updatedAt: string;
};

export type CreateH2HRequest = {
	token: string;
	body: {};
};

export type CreateH2HResponse = {
	message: string;
};
