CREATE DATABASE course_db;
USE course_db;
CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    student_id VARCHAR(20),
    major VARCHAR(100)
);
INSERT INTO student (name, student_id, major)
VALUES ('Zalvareza', 'EX251437', 'Computing/IT');
SELECT * FROM student;
UPDATE student
SET name='Zalvareza Irham Maulana'
WHERE id=1;
DELETE FROM student WHERE id=1;






