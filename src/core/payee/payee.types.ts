export interface IPayee {
  _id: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  emailAddress: string;
  address: string;
  age: number;
  roles: string[];
  withHoldingTax: number;
  salary: number;
  country: string;
  city: string;
  socialProfileLink: string;
  cardNumber: string;
  active: boolean;
}

export interface IPayments {
  total: number;
  numberOfPayees: number;
  createdAt: number;
  companyBalance: number;
}

export interface ICompany {
  _id: string;
  password: string;
  balance: number;
  address: string;
  phone: string;
  email: string;
  countOfPayees: number;
  name: string;
}
