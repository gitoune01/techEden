import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  review: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numberOfReviews: {
    type: Number,
    required: true,
  },
  stock:{
    type:Number,
    required: true,
    default: 0,
  },
  price:{
    type:Number,
    required: true,
    default: 0,
  },
  
  productIsNew:{
    type: Boolean,
    default:false
  }
},{timestamps:true});

export default mongoose.model('Product', productSchema);
