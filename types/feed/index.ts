export type PostRequest = {
	token: string;
	body: {
		content?: string;
		postType?: string;
		contentType?: string;
		attachment?: {
			url: string;
			contentType: string;
		}[];
	};
};

export type PostResponse = {};
