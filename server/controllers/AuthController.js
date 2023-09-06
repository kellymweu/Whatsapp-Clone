import getPrismaInstance from "../utils/PrismaClient.js";

export const checkUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({ msg: "Email is required...", status: false });
    }
    const prisma = getPrismaInstance;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.json({ msg: "User does not exist...", status: false });
    } else {
      return res.json({
        msg: "User exists...let's gooo",
        status: true,
        data: user,
      });
    }
  } catch (error) {
    next(err);
  }
};
