module.exports = {
  routes: [
    {
      // createOrder
      method: "POST",
      path: "/createOrder",
      handler: "order.createOrder",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
