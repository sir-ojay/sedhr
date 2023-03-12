
export type GetFriendsRequest = {
  token: string;
};

export type GetFriendsResponse = {
  data: {
    friends: string[];
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

export type SendFriendsResponse = {
	data:[];
};

export type FriendsRequest ={
	data: {
		receivedRequests: [
		  {
			accountType: string;
			name: string;
			profilePicture: string;
			username: string;
		  }
		];
	  };
}

export type GetFriendsRequestRequest = {
  token: string;
};

export type GetFriendsRequestResponse = {
 data: {
	receivedRequests: [
	  {
		accountType: string;
		name: string;
		profilePicture: string;
		username: string;
	  }
	];
  };
};
