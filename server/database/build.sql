BEGIN;

DROP TABLE IF EXISTS book, users CASCADE;

CREATE TABLE users (
  id INT AUTO_INCREMENT primary key NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);


CREATE TABLE book (
  id INT AUTO_INCREMENT primary key NOT NULL,
  name VARCHAR(255) NOT NULL,
  userId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id)
);

COMMIT;