import dogsModel from "../models/dogsModel.js";

const createNewDog = async (req, res) => {
  try {
    const newDog = await dogsModel.create(req.body);

    res
      .status(200)
      .json({ message: "New dog information added successfully", newDog });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error adding new information!" });
  }
};

//get all dogs
const getAllDogs = async (req, res) => {
  try {
    const findAllDogs = await dogsModel.findAll();
    if (!findAllDogs) {
      return res.status(400).json({ message: "No dogs available!" });
    }
    res.status(200).json(findAllDogs);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Can not get all job seekers!" });
  }
};

// Sorting by atrribute and pagination
const getDogs = async (req, res) => {
  const { attribute, order, pageNumber = 1, limit = 10 } = req.query;

  const offset = (pageNumber - 1) * limit;

  try {
    const dogs = await dogsModel.findAll({
      order: [[attribute, order]],
      offset: offset,
      limit: parseInt(limit),
    });
    res.status(200).json(dogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { createNewDog, getAllDogs, getDogs };
