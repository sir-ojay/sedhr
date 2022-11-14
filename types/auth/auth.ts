export interface LoginResponse {
	_id: string;
	name: string;
	profilePicture: string;
	company: string;
	accountType: string;
	email: string;
	username: string;
	token: string;
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

export interface ForgotPasswordResponse {
	message: string;
	data?: string;
	success: boolean;
}

export interface ForgotPasswordRequest {
	email: string;
}

export interface ResetPasswordResponse {
	message: string;
}

export interface ResetPasswordRequest {
	token: string;
	body: {
		password: string;
		confirmpassword: string;
	};
}
