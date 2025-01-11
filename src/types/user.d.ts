type User = {
  name: string;
  displayName: string;
  location: string;
  bio: string;
  email: string;
  resumeUrl: string;
  leetcode: string;
  meeting: string;
  github: {
    username: string;
    url: string;
  };
  social: {
    linkedin: string;
    twitter: string;
    spotify: string;
    unsplash: string;
    trakt: string;
  };
};

export default User;
