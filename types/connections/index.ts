export type GetFriendsRequest = {
	token: string;
};

export type GetFriendsResponse = {
	data: {
		accountType: string;
		name: string;
		profilePicture: string;
		username: string;
		_id: string;
	};
};

export type SendFriendsRequest = {
	token: string;
	username: string;
};

export type SendFriendsResponse = {};
