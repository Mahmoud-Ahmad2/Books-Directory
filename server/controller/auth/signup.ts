import { getByEmail, createUser } from '../../database/queries';
import { Request, Response } from 'express';
import { hash } from 'bcrypt';
import { signupValidation } from '../../utils';

const signup = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    
    await signupValidation({
      name, email, password,
    });
    
    const [checkEmail]: any = await getByEmail(email);
    
    if (checkEmail.length > 0) {
      throw new Error('Email already exists');
    }

    const hashedPassword: string = await hash(password, 10);
    
    await createUser(email, hashedPassword, name);

    return res.status(201).json({
        message: 'Account created successfully',
      });

  } catch (error) {
    res.send(error);
  }
};

export default signup;