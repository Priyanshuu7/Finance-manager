const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  originalAmount: {
    type: Number,
    required: true,
  },
  roundedAmount: {
    type: Number,
    required: true,
  },
  roundupAmount: {
    type: Number,
    required: true,
  },
  allocation: {
    type: String,
    enum: ["investment", "donation", "personal savings"],
    required: true,
  },
  transactionDate: {
    type: Date,
    default: Date.now,
  },
});
const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
