import db from '../../config';

const insert = (bookName: string, id: number) => {
  return db.promise().query('INSERT INTO book (name, userId) VALUES (?, ?)', [bookName, id]);
}

export default insert;