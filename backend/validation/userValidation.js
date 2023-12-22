const Joi = require("joi");
const userValidation = (req, res, next) => {
  const schema = Joi.object({
    firstname: Joi.string().required().min(3),
    lastname: Joi.string().required().min(5),
    password: Joi.string().required().min(6),
    email: Joi.string().required(),
    phone: Joi.number().min(8),
    role: Joi.string().min(4),
  });

  let { error } = schema.validate(req.body);
  if (error) return res.send(error.details[0].message);
  next();
};
module.exports = { userValidation };
