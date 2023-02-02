import Products from '../models/products.js';

export const getProducts = async (req, res) => {
  const products = await Products.find({});
  res.status(200).json(products);
};
