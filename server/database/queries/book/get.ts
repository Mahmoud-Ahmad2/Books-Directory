import db from '../../config';


const getBook = (bookName?: string) => { 
  return db.promise().query('SELECT name FROM book WHERE name = ?', [bookName]);
}

export default getBook;