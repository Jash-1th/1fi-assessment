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
{"_id":{"$oid":"6916d089a2ee4e0ba2a6a09c"},
"name":"Samsung S25 Ultra 512GB","slug":"samsung-s25-ultra-512gb","mrp":{"$numberInt":"149999"},"price":{"$numberInt":"142500"},
"image":"https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg","finishes":["Grey","Black","Violet"],
"emiPlans":[{"tenure":{"$numberInt":"3"},"monthlyPayment":{"$numberInt":"47500"},
"interest":{"$numberInt":"0"},"cashback":{"$numberInt":"5000"},"_id":{"$oid":"6916d089a2ee4e0ba2a6a09d"}},{"tenure":{"$numberInt":"6"},"monthlyPayment":{"$numberInt":"23750"},"interest":{"$numberInt":"0"},"cashback":{"$numberInt":"5000"},"_id":{"$oid":"6916d089a2ee4e0ba2a6a09e"}},{"tenure":{"$numberInt":"12"},"monthlyPayment":{"$numberInt":"11875"},"interest":{"$numberInt":"0"},"cashback":{"$numberInt":"5000"},"_id":{"$oid":"6916d089a2ee4e0ba2a6a09f"}},{"tenure":{"$numberInt":"24"},"monthlyPayment":{"$numberInt":"6200"},"interest":{"$numberDouble":"5.5"},"cashback":{"$numberInt":"5000"},"_id":{"$oid":"6916d089a2ee4e0ba2a6a0a0"}}],"__v":{"$numberInt":"0"},"createdAt":{"$date":{"$numberLong":"1763102857776"}},"updatedAt":{"$date":{"$numberLong":"1763102857776"}}}"

## Database Schema:  
<img width="576" height="582" alt="image" src="https://github.com/user-attachments/assets/46a33466-58f8-40fd-bb2e-3e27d49b009f" />




