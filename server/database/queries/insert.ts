import db from '../config';

const insert = (bookName: string) => {
  return db.promise().query('INSERT INTO book (name) VALUES (?)', [bookName]);
}

export default insert;