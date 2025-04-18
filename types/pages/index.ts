export type Pages = {
  isDeleted: false;
  views: number;
  maleViews: number;
  femaleViews: number;
  profilePicture: string;
  mediaUrl: null;
  _id: string;
  postCreatorId: string;
  content: string;
  attachment: {
    url: string;
    contentType: string;
    _id: string}[];
  contentType: string;
  postType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  type: string;
  link: string;
  category: string;
  businessName:string;

    name: string;
    href: string | null;
    icon: string;
    query?: string;
    slug?: string;
    external?: boolean;
  
};




export type GetAllPostsResponse = {
    message: string;
    error: string;
    data: Pages[];
  };
  
  export type GetAllPostsRequest = {
    token: string;
  };

export type GetAllPagesResponse = {
    message: string;
    error: string;
    data: Pages[];
  };
  
  export type GetAllPagesRequest = {
    token: string;
  };
