import auth from "../model/auth";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { checkUse } from "../schemas/auth";
export const Signup = async (req, res) => {
  try {
    const { error } = checkUse.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const userExits = await auth.findOne({ email: req.body.email });
    if (userExits) {
      return res.status(400).json({
        message: "Email đã tồn tại",
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await auth.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    const accessToken = jwt.sign({ _id: user._id }, "phuongle", {
      expiresIn: "1d",
    });
    return res.status(200).json({
      message: "Đăng ký thành công",
      accessToken,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
