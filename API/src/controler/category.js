import category from "../model/category";

export const addCategory = async (req, res) => {
    try {
        const data = await category.create(req.body)
        console.log(data)
        if (!data) {
            return res.status(400).json({ message: "không thêm được sản phẩm" })
        }
        return res.status(200).json({ message: "thêm sản phẩm thành công", data })
    } catch (error) {
        return res.status(400).json({ message: error })
    }
}