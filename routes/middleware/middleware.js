import dogsModel from "../../models/dogsModel.js";

const checkDogName = async (req, res, next) => {
    try {
        const { name } = req.body
        const findDog = await dogsModel.findOne({ where: { name } });
        if (findDog) return res.status(403).json({ mesage: "Dog namer already exist!" });
    } catch (error) {
        console.log(error);
    };
    next();
};

export default checkDogName;