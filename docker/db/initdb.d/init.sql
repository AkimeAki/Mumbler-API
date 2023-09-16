DROP SCHEMA IF EXISTS dev;

CREATE SCHEMA dev DEFAULT CHARACTER
SET
	utf8mb4 COLLATE utf8mb4_general_ci;

USE dev;

DROP TABLE IF EXISTS users;

CREATE TABLE
	users (
		id INT (10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
		username VARCHAR(40) NOT NULL,
		userid VARCHAR(40) NOT NULL UNIQUE,
		email VARCHAR(40) NOT NULL UNIQUE,
		password VARCHAR(255) NOT NULL
	);

INSERT INTO
	users (id, username, userid, email, password)
VALUES
	(
		1,
		"テスト1",
		"test1",
		"test1@example.com",
		"$2b$10$uFXxUcYhfBt/kiMovI1R5ezhd9isYCM8TC4.x.Vwx4PsPug151vim" -- test
	);

INSERT INTO
	users (id, username, userid, email, password)
VALUES
	(
		2,
		"テスト2",
		"test2",
		"test2@example.com",
		"$2b$10$uFXxUcYhfBt/kiMovI1R5ezhd9isYCM8TC4.x.Vwx4PsPug151vim" -- test
	);
