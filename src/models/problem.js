import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  replies: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      answer: {
        type: String,
      },
      likes: [
        {
          stars: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
        },
      ],
    },
  ],
});

const Problem =
  mongoose.models.Problem || mongoose.model("Problem", problemSchema);
export default Problem;
