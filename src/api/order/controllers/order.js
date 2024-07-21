"use strict";
const Razorpay = require("razorpay");

const { createCoreController } = require("@strapi/strapi").factories;

const instance = new Razorpay({
  key_id: process.env.key_id,
  key_secret: process.env.key_secret,
});

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async createOrder(ctx) {
    const { amount, currency, receipt, notes } = ctx.request.body;
    const options = {
      amount,
      currency,
      receipt,
      notes,
    };
  },
}));
