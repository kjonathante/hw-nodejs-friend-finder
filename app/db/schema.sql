DROP DATABASE IF EXISTS friend_finder_db;

CREATE DATABASE friend_finder_db;

USE friend_finder_db;

CREATE TABLE questions (
  id INT NOT NULL AUTO_INCREMENT,
  question VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO questions(question) VALUES ('question 1');
