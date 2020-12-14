export type TContact = {
  email: string;
  phone: string;
};

export type TBookReviews = {
  bookTitle: string;
  title: string;
  content: string;
};

export type TProfile = {
  id: string;
  name: string;
  age: number;
  contacts: TContact;
  isMember: boolean;
  experiencedSeasons: number[];
  createdAt: string;
  bookReviews: TBookReviews[];
  editing: boolean;
};
