const savingGoalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  goalType: {
    type: String,
    enum: ["investment", "donation", "personal savings"],
    required: true,
  },
  targetAmount: {
    type: Number,
    required: true,
  },
  currentAmount: {
    type: Number,
    default: 0,
  },
  endDate: {
    type: Date,
  },
  reminders: {
    enabled: {
      type: Boolean,
      default: true,
    },
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly"],
      default: "weekly",
    },
  },
});

const SavingGoal = mongoose.model("SavingGoal", savingGoalSchema);
module.exports = SavingGoal;
