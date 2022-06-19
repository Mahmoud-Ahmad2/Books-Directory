import db from '../../config';

const deleteBook = (bookName: string, userId: number) => {
  return db.promise().query('DELETE FROM book WHERE name = ? AND userId = ?', [bookName, userId]);
}

export default deleteBook;
