export type UploadDocumentResponse = {
	message: string;
};

export type UploadDocumentRequest = {
	token: string;
	file: File | any;
};
