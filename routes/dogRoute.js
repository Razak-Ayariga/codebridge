import express from "express"
const router = express.Router();
import {createNewDog, getAllDogs, getDogs} from "../controller/dogsController.js";
import dogValidation from "../validator/validator.js";
import checkDogName from "./middleware/middleware.js";


//create a new dog
router.post("/addDog", checkDogName, dogValidation, createNewDog);
router.get("/all", getAllDogs);
// query by attribute and pagination
router.get('/dogs', getDogs);

// Ping endpoint
router.get('/ping', (req, res) => {
  res.send('Dogshouseservice.Version1.0.1');
});

export default router;