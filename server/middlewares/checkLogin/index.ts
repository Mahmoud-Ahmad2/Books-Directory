import { verifyToken } from '../../utils';
import { Response, NextFunction } from 'express';

const checkLogin = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    const payload = await verifyToken(token);
    req.user = payload;
    next();
  }
  catch (error) {
    res.send(error);
  }
}

export default checkLogin;