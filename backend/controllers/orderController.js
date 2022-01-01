import Order from "../db/models/Order.js";

export const createOrder = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    shippingPrice,
    totalPrice,
  } = req.body;

  const user = req.user._id;
  const order = new Order({
    user,
    orderItems,
    shippingAddress,
    paymentMethod,
    shippingPrice,
    totalPrice,
  });

  try {
    await order.save();
    return res.status(201).json(order);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Failed to confirm order. Please try again later",
      error: err,
    });
  }
};
