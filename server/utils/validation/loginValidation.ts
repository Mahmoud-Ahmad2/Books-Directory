import Joi from 'joi';

const loginValidation = async (data: object) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/).required(),
  });

  const result: object = await schema.validateAsync(data, { abortEarly: false });
  return result;
};

export default loginValidation;