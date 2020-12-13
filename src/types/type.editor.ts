export type TContact = {
  email: string;
  phone: string;
};

export type TProfile = {
  id: string;
  age: number;
  name: string;
  contacts: TContact;
};
