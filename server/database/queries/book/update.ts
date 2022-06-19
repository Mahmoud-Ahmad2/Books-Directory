import db from '../../config';

const update = (bookName: string, newName: string) => {
  return db.promise().query('UPDATE book SET name = ? WHERE name = ?', [newName, bookName]);
}

export default update;