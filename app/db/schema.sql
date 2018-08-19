DROP DATABASE IF EXISTS friend_finder_db;

CREATE DATABASE friend_finder_db;

USE friend_finder_db;

CREATE TABLE questions (
  id INT NOT NULL AUTO_INCREMENT,
  question VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE answers (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255),
  photo_url VARCHAR(255),
  ans1 INT,
  ans2 INT,
  ans3 INT,
  ans4 INT,
  ans5 INT,
  ans6 INT,
  ans7 INT,
  ans8 INT,
  ans9 INT,
  ans10 INT,
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
