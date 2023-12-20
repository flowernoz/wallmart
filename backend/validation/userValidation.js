const Joi = require("joi");
const userValidation = (req, res, next) => {
  const schema = Joi.object({
    firstname: Joi.string().required().min(3),
    lastname: Joi.string().required().min(5),
    age: Joi.number().required(),
    gender: Joi.string().required().min(4),
    username: Joi.string().required().min(4),
    password: Joi.string().required().min(6),
    email: Joi.string().required(),
    phone: Joi.number().required().min(8),
    address: Joi.string().required(),
    role: Joi.string().required().min(4),
  });

  let { error } = schema.validate(req.body);
  if (error) return res.send(error.details[0].message);
  next();
};
module.exports = { userValidation };
