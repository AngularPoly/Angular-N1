import mongoose from "mongoose"
const categorySchame = mongoose.Schema({
    name: String,
    productId: [{ type: mongoose.Types.ObjectId, ref: "product" }]

}, { timestamps: true, versionKey: false })
export default mongoose.model("category", categorySchame)

