CREATE DATABASE GSTOMATO;

-- CREATE TABLE Employee (
--     EID INTEGER PRIMARY KEY,
--     FName VARCHAR(50),
--     LName VARCHAR(50),
--     Gender varchar(1) check(Gender in ('M', 'F')),
-- Address VARCHAR(200)
);

CREATE TABLE Garden (
    ID VARCHAR(50) PRIMARY KEY,
    url VARCHAR(200),
    gKey VARCHAR(50)
);

CREATE TABLE User (
    ID VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50),
    name VARCHAR(50),
    avatar VARCHAR(200),
    garden_id VARCHAR(50),

    FOREIGN KEY (ID) REFERENCES Garden (ID)
);

CREATE TABLE Climate (
    ID VARCHAR(50) PRIMARY KEY,
    `type` VARCHAR(5),
    `value` DECIMAL(10,2),
    `time` Date,
    garden_id VARCHAR(50),

    FOREIGN KEY (ID) REFERENCES Garden (ID)
);

CREATE TABLE Device (
    ID VARCHAR(50) PRIMARY KEY,
    name VARCHAR(50), 
    status VARCHAR(50)
);

CREATE TABLE Schedule (
    ID VARCHAR(50) PRIMARY KEY,
    `type` VARCHAR(5),
    start_time Date,
    end_time Date,
    garden_id VARCHAR(50),
    created_at: Date,
    updated_at: Date,

    FOREIGN KEY ID REFERENCES Garden (ID)
);

CREATE TABLE Notification (
    ID VARCHAR(50) PRIMARY KEY,
    `status` VARCHAR(50),
    problem VARCHAR(50),
    sub_problem VARCHAR(50),
    `time` Date,
    garden_id VARCHAR(50),

    FOREIGN KEY ID REFERENCES Garden (ID)
);

CREATE TABLE History (
    ID VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50),
    activity VARCHAR(50),
    `time` Date,
    garden_id VARCHAR(50),

    FOREIGN KEY ID REFERENCES Garden (ID)
);

CREATE TABLE Mode_garden (
    ID VARCHAR(50) PRIMARY KEY,
    garden_id VARCHAR(50),
    `type` VARCHAR(5),
    mode VARCHAR(10),

    FOREIGN KEY ID REFERENCES Garden (ID)
);