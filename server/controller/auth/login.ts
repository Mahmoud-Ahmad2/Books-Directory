import { getByEmail } from '../../database/queries';
import { Request, Response } from 'express';
import { loginValidation, signToken } from '../../utils';
import { compare } from 'bcrypt';
import { JwtPayload } from 'jsonwebtoken';

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    await loginValidation({
      email, password,
    });

    const [checkEmail]: any = await getByEmail(email);

    if (checkEmail.length === 0) {
      throw new Error('Email does not exist');
    } 
    
    const validatePassword: boolean = await compare(password, checkEmail[0].password);

    if(!validatePassword) {
      throw new Error('Password is incorrect');
    }
    
    const payload: JwtPayload = {
      email,
    };

    const token = await signToken(payload);
    res.cookie('token', token, {
      httpOnly: true,
    });
    
    return res.json({
      message: 'Login successfully',
    });
  } catch (error) {
    res.send(error);
  }
}

export default login;

