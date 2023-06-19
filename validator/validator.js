import Joi from "joi";

const dogValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required().messages({
      "any.required": "Name of the dog is required!",
    }),
    color: Joi.string().required().messages({
      "any.required": "Color of the dog is required!",
    }),
    tail_length: Joi.number().required().min(0).messages({
      "any.required": "Tail length is required!",
      "number.min": "Tail length cannot be less than 0",
    }),
    weight: Joi.string().required().messages({
      "any.required": "Weight of the dog is required!",
    }),
  });

  const validation = schema.validate(req.body);
  const { error } = validation;

  if (error) {
    const message = error.details.map((x) => x.message);
    return res.status(400).json({ message });
  }

  next();
};

export default dogValidation;
