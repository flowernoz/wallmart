const Joi = require("joi");
const productValidation = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required().min(3),
    category: Joi.string().required().min(2),
    images: Joi.array().required().min(1),
    brand: Joi.string().required(),
    description: Joi.string(),
    details: Joi.array(),
    price: Joi.number().required(),
  });

  let { error } = schema.validate(req.body);
  if (error) return res.send(error.details[0].message);
  next();
};

module.exports = { productValidation };
