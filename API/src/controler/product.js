import product from "../model/product";
export const addProduct = async (req, res) => {
    try {
        const data = await product.create(req.body)
        console.log(data)
        if (!data) {
            return res.status(400).json({
                message: "không thêm được sản phẩm"
            })
        }
        return res.status(200).json({
            message: "thêm sản phẩm thành công", data
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
