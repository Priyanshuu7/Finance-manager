const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  preferences: {
    investmentType: {
      type: String,
      enum: [
        "green funds",
        "tech stocks",
        "crypto",
        "low-risk mutual funds",
        "ETFs",
      ],
      default: "low-risk mutual funds",
    },
    goal: {
      type: String,
      enum: ["investment", "donation", "personal savings"],
      default: "personal savings",
    },
  },
  monthlySavingGoal: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
