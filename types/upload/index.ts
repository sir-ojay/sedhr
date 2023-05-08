export type UploadDocumentResponse = {
	message: string;
	error:string;
};

export type UploadDocumentRequest = {
	token: string;
	file: File | any;
};
