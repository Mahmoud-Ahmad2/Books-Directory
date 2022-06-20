import { Response } from 'express';
import { deleteBook } from '../../database/queries';

const deleteBookFunc = async (req: any, res: Response) => {
  try {
    const { bookName } = req.body;
    const { id } = req.user;
    await deleteBook(bookName , id);
    res.json({
      message: 'Deleted'
    })
  } catch (error) {
    res.send(error);
  }
}

export default deleteBookFunc;