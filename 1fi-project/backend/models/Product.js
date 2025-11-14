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
    emiPlans: [EmiPlanSchema],
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);
export default Product;