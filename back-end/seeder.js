import User from './models/user.js';
import Product from './models/product.js';
import Order from './models/order.js';
import dotenv from 'dotenv';
import connectMD from './config/db.js';
import users from './data/users.js';
import products from './data/products.js';
import colors from 'colors';

dotenv.config();
connectMD();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers.find(user => user.isAdmin);

    const updatedProducts = products.map(product => {
      return { ...product, userId: adminUser._id };
    });
    await Product.insertMany(updatedProducts);

    console.log(`Data imported!`.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log(`Data destroyed!`.red);
    process.exit();
  } catch (error) {
    console.error(`${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
