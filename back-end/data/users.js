import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Ahmad',
    email: 'ahmad@gmail.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'Khaled',
    email: 'khaled@gmail.com',
    password: bcrypt.hashSync('123456'),
  },
  {
    name: 'Kareem',
    email: 'kareem@gmail.com',
    password: bcrypt.hashSync('123456'),
  },
];

export default users;
