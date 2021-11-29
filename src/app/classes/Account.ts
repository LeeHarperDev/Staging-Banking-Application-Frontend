import User from "./User";
import AccountType from "./AccountType";
import Transaction from "./Transaction";

export default interface Account {
  id: number;
  owner: User;
  name: string;
  accountType: AccountType;
  transactions: Transaction[];
}
