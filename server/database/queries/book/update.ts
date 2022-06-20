import db from '../../config';


const update = (bookName: string, newName: string, userId : number) => {
  return db.promise().query('UPDATE book SET name = ? WHERE name = ? AND userId = ?', [newName, bookName, userId]);
}

export default update;