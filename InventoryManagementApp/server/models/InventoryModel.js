const mongoose = require("mongoose");
const { Schema } = mongoose;

// const inventorySchema = new mongoose.Schema({
//     rank: { type: Number, required: true },
//     desc: { type: String, required: true },
//     qtysold: { type: Number, required: false },
//     exchqty: { type: Number, required: false },
//     refqty: { type: Number, required: false },
//     qty: { type: Number, required: true },
//     caseqty: { type: Number, required: false },
//     discount: { type: Number, required: false },
//     discper: { type: Number, required: false },
//     refund: { type: Number, required: false },
//     return: { type: Number, required: false },
//     amount: { type: Number, required: true },
//     grossamt: { type: Number, required: true },
//     price: { type: Number, required: true },
//     barcode: { type: String, required: true },
//     itemcode: { type: String, required: true },
//     otherbc: { type: String },
//     lastsold: { type: Date },
//     dept: { type: String, required: true },
//     category: { type: String },
//     division: { type: String },
//     group: { type: String },
//     brand: { type: String },
//     supplier: { type: String },
//     size: { type: Schema.Types.Mixed }, // Can be either String or Number
//     unit: { type: String }
// });

const inventorySchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  description: { type: String},
  availableQty: { type: Number, required: false },
  price: { type: Number, required: false },
  category: { type: String, required: false },
  supplier: { type: String, required: false },
  size: { type: String, required: false },
  unit: { type: String, required: false },
});

module.exports = mongoose.model("Inventory", inventorySchema);
