import db from '../../config';

const getByEmail = async (email: string) => {
  return db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
}

export default getByEmail;