const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
   name: { type: String, required: true },
   resume: { type: String },
   upvotes: [{ type: Boolean }],
   downvotes: [{ type: Boolean }],
   author: {
       type: Schema.Types.ObjectId,
       ref: "user",
       required: true,
       autopopulate: true
   },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "comment",
        required: true,
        autopopulate: true
    }]
});

BookSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("book", BookSchema);