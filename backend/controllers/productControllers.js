import Product from "../db/models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      message: "Could not find any products",
      error: err,
    });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        error: "Product not found",
      });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      message: "Could not find product",
      error: err,
    });
  }
};
