import { Response } from 'express';
import { insert } from '../../database/queries';

const insertBook = async (req: any, res: Response) => {
  try {
    const { bookName } = req.body;
    const { id } = req.user;
    await insert(bookName, id);
    res.json({
      message: 'inserted'
    })
  } catch (error) {
    res.send(error);
  }
}

export default insertBook;