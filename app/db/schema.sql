DROP DATABASE IF EXISTS friend_finder_db;

CREATE DATABASE friend_finder_db;

USE friend_finder_db;

CREATE TABLE questions (
  id INT NOT NULL AUTO_INCREMENT,
  question VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO questions(question) VALUES ('question 1');
INSERT INTO questions(question) VALUES ('question 2');
INSERT INTO questions(question) VALUES ('question 3');
INSERT INTO questions(question) VALUES ('question 4');
INSERT INTO questions(question) VALUES ('question 5');
INSERT INTO questions(question) VALUES ('question 6');
INSERT INTO questions(question) VALUES ('question 7');
INSERT INTO questions(question) VALUES ('question 8');
INSERT INTO questions(question) VALUES ('question 9');
INSERT INTO questions(question) VALUES ('question 10');
