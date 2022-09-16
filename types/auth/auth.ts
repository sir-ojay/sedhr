export interface LoginResponse {
	token: string;
	user: {
		_id: string;
		firstName: string;
		lastName: string;
		profilePicture: string;
		company: string;
		accountType: string;
		username: string;
	};
}

export interface LoginRequest {
	email: string;
	password: string;
}

export interface RegisterResponse {
	status: string;
	message: string;
	data: {
		email: string;
		username: string;
		id: string;
		isEmailVerified: boolean;
	};
}

export interface RegisterRequest {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	confirmpassword: string;
}

export interface VerifyEmailResponse {
	status: string;
	message: string;
	data: {
		otp: number;
	};
}

export interface VerifyEmailRequest {
	email: string;
	firstName?: string;
	lastName?: string;
}

export interface ValidateEmailResponse {
	status: string;
	message: string;
	data: {
		email: string;
		isVerified: boolean;
		_id: string;
		createdAt: string;
		__v: number;
	};
}

export interface ValidateEmailRequest {
	email?: string;
	otp: string;
}
