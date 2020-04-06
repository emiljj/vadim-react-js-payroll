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
  companyID: string;
  password: string;
}
