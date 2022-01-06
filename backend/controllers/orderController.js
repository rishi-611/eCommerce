import Order from "../db/models/Order.js";

//place cod order, default payment status will be false
export const createCODOrder = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    shippingPrice,
    phoneNumber,
    totalPrice,
  } = req.body;
  console.log(phoneNumber);

  const user = req.user._id;
  const order = new Order({
    user,
    orderItems,
    shippingAddress,
    paymentMethod,
    shippingPrice,
    phoneNumber,
    totalPrice,
  });
  console.log(order);

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

export const getOrder = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      message: "Please provide order ID!",
    });
  }

  try {
    //fetch the order by id
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({
        message: `Order with ID ${id} not found!`,
      });
    }

    //check if order belongs to the user
    if (order._id.toString() !== id) {
      return res.status(401).json({
        message: "Authorization Error",
      });
    }

    return res.json(order);
  } catch (error) {
    return res.status(500).json({
      error,
      message: "Failed to fetch order with ID " + id,
    });
  }
};
