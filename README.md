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
<img width="438" height="300" alt="image" src="https://github.com/user-attachments/assets/027cd666-5dd2-4692-be2c-ee7c798efb6a" />


GET /api/products/:slug → returns product details  
<img width="850" height="392" alt="image" src="https://github.com/user-attachments/assets/c3f06de2-14d2-47bf-b4de-26df88153c07" />


## Database Schema:  
<img width="576" height="582" alt="image" src="https://github.com/user-attachments/assets/46a33466-58f8-40fd-bb2e-3e27d49b009f" />




