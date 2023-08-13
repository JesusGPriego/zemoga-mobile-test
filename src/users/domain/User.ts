import { RawUser, Address } from '../interfaces';

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  companyName: string;
  constructor({
    id,
    name,
    username,
    email,
    address,
    phone,
    website,
    company,
  }: RawUser) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.companyName = company.name;
  }
}
