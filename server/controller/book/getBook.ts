import { Request, Response } from 'express';
import { getBook } from '../../database/queries';

const getBookFunc = async (req: Request, res: Response) => {
  try {
    const { bookName } : {bookName?: string} = req.query;
    const [book] = await getBook(bookName);
    res.json(book);
  } catch (error) {
    res.send(error);
  }
}

export default getBookFunc;