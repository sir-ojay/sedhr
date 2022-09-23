export type VerifyPaymentResponse = {
	success: boolean;
	message: string;
};

export type VerifyPaymentRequest = {
	reference: string;
	amount: number;
	email: string;
};
