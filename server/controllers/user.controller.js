import bcrypt from 'bcrypt'
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(401).json({
                message: "Something is missing, Please check!",
                success: false,
            });
        }

        const userEmail = await UserModel.findOne({ email });
        const userName = await UserModel.findOne({ username });
        if (userName || userEmail) {
            return res.status(401).json({
                message: "Try different email!",
                success: false,
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        await UserModel.create({
            username,
            email,
            password: hashPassword,
        });

        return res.status(201).json({
            message: "Account created successfully.",
            success: true,
        });
    } catch (error) {
        console.log(error);
    }
};