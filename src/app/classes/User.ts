export default class User {
  id!: number;
  username!: string;
  role!: {
    id: number,
    name: string,
    description: string
  };
  person!: {
    id: number,
    fname: string,
    lname: string,
    minitial: string,
    address: {
      id: number,
      firstline: string,
      secondLine: null,
      city: string,
      state: string,
      zip: string
    }
  };
  email!: string;
  dateCreated!: Date;
}
