import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const products = [
  {
    name: 'iPhone 17 Pro 256GB',
    slug: 'iphone-17-pro-256gb',
    mrp: 134900,
    price: 127400,
    image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg', // Using the image from the PDF
    finishes: ['Orange', 'Natural Titanium', 'Blue Titanium'],
    emiPlans: [
      { tenure: 3, monthlyPayment: 44967, interest: 0, cashback: 7500 },
      { tenure: 6, monthlyPayment: 22483, interest: 0, cashback: 7500 },
      { tenure: 12, monthlyPayment: 11242, interest: 0, cashback: 7500 },
      { tenure: 24, monthlyPayment: 5621, interest: 0, cashback: 7500 },
      { tenure: 36, monthlyPayment: 4297, interest: 10.5, cashback: 7500 },
      { tenure: 48, monthlyPayment: 3385, interest: 10.5, cashback: 7500 },
      { tenure: 60, monthlyPayment: 2842, interest: 10.5, cashback: 7500 },
    ],
  },
  {
    name: 'Samsung S25 Ultra 512GB',
    slug: 'samsung-s25-ultra-512gb',
    mrp: 149999,
    price: 142500,
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg', // Placeholder - replace with a real image URL
    finishes: ['Grey', 'Black', 'Violet'],
    emiPlans: [
      { tenure: 3, monthlyPayment: 47500, interest: 0, cashback: 5000 },
      { tenure: 6, monthlyPayment: 23750, interest: 0, cashback: 5000 },
      { tenure: 12, monthlyPayment: 11875, interest: 0, cashback: 5000 },
      { tenure: 24, monthlyPayment: 6200, interest: 5.5, cashback: 5000 },
    ],
  },
  {
    name: 'Google Pixel 10 Pro 256GB',
    slug: 'google-pixel-10-pro-256gb',
    mrp: 109999,
    price: 99999,
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg', // Placeholder - replace with a real image URL
    finishes: ['Obsidian', 'Porcelain'],
    emiPlans: [
      { tenure: 3, monthlyPayment: 33333, interest: 0, cashback: 2000 },
      { tenure: 6, monthlyPayment: 16667, interest: 0, cashback: 2000 },
      { tenure: 12, monthlyPayment: 8334, interest: 0, cashback: 2000 },
    ],
  },
];

const seedDB = async () => {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB for seeding...');
  
  await Product.deleteMany({});
  console.log('Cleared existing products.');
  
  await Product.insertMany(products);
  console.log('Seeded new products.');
  
  mongoose.connection.close();
};

seedDB().catch((err) => {
  console.error(err);
  mongoose.connection.close();
});