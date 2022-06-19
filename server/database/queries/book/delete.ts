import db from '../../config';

const deleteBook = (bookName: string) => {
  return db.promise().query('DELETE FROM book WHERE name = ?', [bookName]);
}

export default deleteBook;
