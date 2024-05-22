
DROP TABLE "user";
DROP TABLE "Medication";
DROP TABLE "user_description";

-- User's Login Information
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);

-- Dummy Data for The User's Login Information 
INSERT INTO "user" (username, password)
VALUES
('mustafe00', '123');


-- Medication Table
CREATE TABLE "Medication" (
	id SERIAL PRIMARY KEY,
	user_id SERIAL,
	"Medication_name" VARCHAR (255),
	"Medication_description" TEXT,
	"Dosage" TEXT,
	"Time" TIME,
	FOREIGN KEY ("user_id") REFERENCES "user" ("id")

);

-- User's Desciption
CREATE TABLE "user_description" (
	id SERIAL PRIMARY KEY,
	"Name" TEXT,
	"Bio" TEXT,
	"Height" TEXT,
	"Weight" TEXT, 
	"Address" TEXT,
	"Age" INT,
	"user_id" SERIAL ,
	user_Condition TEXT,
	FOREIGN KEY ("user_id") REFERENCES "user" ("id")
);
-- Dummy Data for the User Description Data on the Registration Page

INSERT INTO user_description 
("Name", "Bio", "Height", "Weight", "Address", "Age", "user", user_Condition) 
VALUES
(
'Mustafe Hassan',
'Test Bio Number 1',
'6 ft',
'1',
'123 ST Test Rd',
'23',
'3',
'Conditon is unknown'
);

-- Selecting the current logged in user's Description Data 
SELECT * FROM user_description
INNER JOIN "user" ON user_description."user_id" = "user".id
WHERE "user".id=2;

-- Selecting the current logged in user's Medication data
SELECT * FROM "Medication"
INNER JOIN "user" on "Medication"."user_id"= "user".id
WHERE "user".id=2;

-- Adding medication for the specific user 
INSERT INTO "Medication"
("Medication_name", "Medication_description", "Dosage", "Time")
VALUE;

