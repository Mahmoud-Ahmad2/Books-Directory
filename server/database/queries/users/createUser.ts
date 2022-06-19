import db from '../../config';

const createUser = async (email: string, password: string, name: string) => {
  return db.promise().query(
    'INSERT INTO users (email, password, name) VALUES (?, ?, ?)',
    [email, password, name],
  );
}

export default createUser;
