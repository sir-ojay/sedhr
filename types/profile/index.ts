export type GetUserIdResponse = {
  message: string;
  error: string;
  data: User;
};

export type GetUserIdRequest = {
  token: string;
  userId: string;
};

export type User = {
  _id: string;
  email: string;
  profilePicture: string;
  about: string;
  username: string;
  createdAt: string;
  accountType: string;
  name: string;
  coverPicture: string;
  educations: {
    school: string;
    degree: string;
    fieldOfStudy: string;
    grade: string;
    startDate: string;
    endDate: string;
    description: string;
    _id: string;
  }[];
  experiences: string[];
  languages: string[];
  licensesAndCertificates: string[];
  recommendations: string[];
  skills: string[];
};
