// schemas/order.js
export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "shippingAddress",
      type: "object",
      fields: [
        { name: "name", type: "string" },
        { name: "address", type: "string" },
        { name: "city", type: "string" },
        { name: "zip", type: "string" },
      ],
    },
    {
      name: "cartItems",
      type: "array",
      of: [{ type: "product" }],
    },
    {
      name: "totalPrice",
      type: "string",
    },
    {
      name: "orderDate",
      type: "datetime",
    },
  ],
};
