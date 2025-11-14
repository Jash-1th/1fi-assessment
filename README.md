


# 1Fi SDE1 Assignment - EMI Product Page

This is a full-stack web application built for the 1Fi SDE1 assignment. It displays products with multiple EMI plans, retrieves data from a backend API, and presents it in a responsive web interface.

## 🚀 Deployed Demo Links

* **Frontend (Netlify):** [https://if1-assessment.netlify.app/](https://if1-assessment.netlify.app/)
* **Backend (Render):** [https://onefi-backend-8krq.onrender.com/](https://onefi-backend-8krq.onrender.com/)

> **Note:** The backend is on Render's free tier and may "spin down" if inactive. The first page load might take 30-60 seconds for the server to wake up.

## 🎥 Video Demo

**https://drive.google.com/file/d/1hNG_BaSOstjboCK2r-xywE_HJxvQi9tV/view?usp=sharing**

---

## 💻 Tech Stack Used

* **Frontend:** React, Vite, Tailwind CSS, React Router
* **Backend:** Node.js, Express.js, Mongoose
* **Database:** MongoDB Atlas
* **Deployment:** Netlify (Frontend), Render (Backend)

---

## 📦 Setup and Run Instructions

You will need two separate terminals to run this project.

### 1. Backend (Server)


# Clone the repository
git clone [https://github.com/Jash-1th/1fi-assessment.git](https://github.com/Jash-1th/1fi-assessment.git)
cd 1fi-assessment

# Navigate to the backend folder
cd backend

# Install dependencies
npm install

# Create a .env file in the 'backend' folder
# Add your MongoDB connection string and frontend URLs
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING_GOES_HERE
FRONTEND_URL=[https://if1-assessment.netlify.app](https://if1-assessment.netlify.app)
LOCAL_FRONTEND_URL=http://localhost:5173

# Run the seed script ONCE to populate the database
node seed.js

# Start the server
npm run dev


> The backend server will be running at `http://localhost:5000`.

### 2\. Frontend (Client)


# From the root '1fi-assessment' folder, open a NEW terminal
cd frontend

# Install dependencies
npm install

# The .env files are already in the repo,
# but your local dev file is frontend/.env.development:
# VITE_API_URL=http://localhost:5000

# Start the client
npm run dev


> The frontend app will be running at `http://localhost:5T3`.

-----

## 📝 API Endpoints and Example Responses

### Get All Products

  * **Endpoint:** `GET /api/products`
  * **Description:** Retrieves a list of all products (a simplified version for the homepage).
  * **Example Response:**
    
    [
      {
        "_id": "6748c..._id_1",
        "name": "iPhone 17 Pro 256GB",
        "slug": "iphone-17-pro-256gb",
        "price": 127400,
        "image": "[https://images.pexels.com/](https://images.pexels.com/)..."
      },
      {
        "_id": "6748c..._id_2",
        "name": "Samsung S25 Ultra 512GB",
        "slug": "samsung-s25-ultra-512gb",
        "price": 142500,
        "image": "[https://images.pexels.com/](https://images.pexels.com/)..."
      }
    ]
    

### Get a Single Product by Slug

  * **Endpoint:** `GET /api/products/:slug`
  * **Description:** Retrieves all details for a single product using its unique slug.
  * **Example Response (`/api/products/iphone-17-pro-256gb`):**
    
    {
      "_id": "6748c..._id_1",
      "name": "iPhone 17 Pro 256GB",
      "slug": "iphone-17-pro-256gb",
      "mrp": 134900,
      "price": 127400,
      "image": "[https://images.pexels.com/](https://images.pexels.com/)...",
      "finishes": ["Orange", "Natural Titanium", "Blue Titanium"],
     "emiPlans": [
    {
      "tenure": 3,
      "monthlyPayment": 44967,
      "interest": 0,
      "cashback": 7500,
      "_id": "6748c..._plan_id_1"
    },
    {
      "tenure": 6,
      "monthlyPayment": 22483,
      "interest": 0,
      "cashback": 7500,
      "_id": "6748c..._plan_id_2"
    }
  ],
      "createdAt": "2025-11-14T...",
      "updatedAt": "2025-11-14T..."
    }
    ```

-----

## 🗃️ Database Schema Used

### `Product` Schema

This collection stores all information related to a single product. The `emiPlans` are embedded as an array of sub-documents.

import mongoose from 'mongoose';

const EmiPlanSchema = new mongoose.Schema({
  tenure: { type: Number, required: true },
  monthlyPayment: { type: Number, required: true },
  interest: { type: Number, required: true },
  cashback: { type: Number, default: 0 },
});

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    finishes: [{ type: String }],
    emiPlans: [EmiPlanSchema], // Embedded Schema
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);
export default Product;

