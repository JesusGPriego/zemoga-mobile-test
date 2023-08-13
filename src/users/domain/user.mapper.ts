import { RawUser } from '../interfaces';
import { User } from './User';

export const userDomainMapper = (user: RawUser) => {
  return new User({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    address: user.address,
    phone: user.phone,
    website: user.website,
    company: user.company,
  });
};
