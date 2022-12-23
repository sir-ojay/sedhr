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

export type H2H = {
	productDetails: {
		name: string;
		category: string;
		description: string;
		quantity: number;
	};
	itemDetails: {
		modelOrType: string;
		description: string;
	};
	technicalDetails: {
		dimensions: string;
		weight: string;
	};
	pickupLocation: {
		address: string;
		lga: string;
		state: string;
		country: string;
	};
	paymentDetails: {
		paymentType: "FIXED";
		prices: [];
	};
	_id: string;
	userId: string;
	code: string;
	images: string[];
	shipmentDetails: string;
	createdAt: string;
	updatedAt: string;
};

export type GetH2HSResponse = {
	message: string;
	data: H2H[];
};

export type GetH2HSRequest = {
	token: string;
};

export type GetH2HResponse = {
	message: string;
	data: H2H;
};

export type GetH2HRequest = {
	token: string;
	id: string;
};
