# 1Fi SDE1 Assignment - EMI Product Page

This is a full-stack web application built for the 1Fi SDE1 Assignment. It displays products with EMI plans, fetches data from a backend API, and presents them in a responsive UI.  
Frontend: https://if1-assessment.netlify.app  
Backend: https://onefi-backend-8krq.onrender.com (may take 30–60 sec to wake)  
Video Demo : https://drive.google.com/file/d/1hNG_BaSOstjboCK2r-xywE_HJxvQi9tV/view?usp=sharing
Tech Stack: React, Vite, Tailwind CSS, React Router, Node.js, Express.js, Mongoose, MongoDB Atlas, Netlify, Render.

# Setup Instructions:  
## Backend:  
git clone https://github.com/Jash-1th/1fi-assessment.git  
cd 1fi-assessment/backend  
npm install  
Create .env with:  
PORT=5000  
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING  
FRONTEND_URL=https://if1-assessment.netlify.app  
LOCAL_FRONTEND_URL=http://localhost:5173  
Seed DB once: node seed.js  
Start server: npm run dev → runs on http://localhost:5000  

## Frontend:  
Open new terminal  
cd frontend  
npm install  
.env.development contains: VITE_API_URL=http://localhost:5000  
Start app: npm run dev → http://localhost:5173  

## API Endpoints:  
GET /api/products → returns product list  
Example:  
[ { "_id": "6748...1", "name": "iPhone 17 Pro 256GB", "slug": "iphone-17-pro-256gb", "price": 127400, "image": "https://images.pexels.com/..." } ]

GET /api/products/:slug → returns product details  
Example:  
{ "_id": "6748...1", "name": "iPhone 17 Pro 256GB", "slug": "iphone-17-pro-256gb", "mrp": 134900, "price": 127400, "image": "https://images.pexels.com/...", "finishes": ["Orange","Natural Titanium","Blue Titanium"], "emiPlans": [ { "tenure": 3, "monthlyPayment": 44967, "interest": 0, "cashback": 7500 }, { "tenure": 6, "monthlyPayment": 22483, "interest": 0, "cashback": 7500 } ] }

## Database Schema:  
import mongoose from 'mongoose';  
const EmiPlanSchema = new mongoose.Schema({ tenure: Number, monthlyPayment: Number, interest: Number, cashback: { type: Number, default: 0 } });  
const ProductSchema = new mongoose.Schema({ name: String, slug: { type: String, unique: true }, mrp: Number, price: Number, image: String, finishes: [String], emiPlans: [EmiPlanSchema] }, { timestamps: true });  
const Product = mongoose.model('Product', ProductSchema);  
export default Product;


