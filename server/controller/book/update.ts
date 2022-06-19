import { Response } from 'express';
import { update } from '../../database/queries';

const updateBook = async (req: any, res: Response) => {
  try {
    const { bookName, newName }: {bookName: string, newName: string} = req.body;
    const { id } = req.user;
    await update(bookName, newName, id);
    res.json({
      message: 'Updated'
    })
  }
  catch (error) {
    res.send(error);
  }
}

export default updateBook;