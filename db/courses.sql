CREATE TABLE Courses (
    id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    price DECIMAL(10, 2),
    PRIMARY KEY(id)
);

INSERT INTO Courses (title, description, image, price) VALUES
('AI Course 1', 'This is a description for AI Course 1', 'img/course1.jpg', 99.99),
('AI Course 2', 'This is a description for AI Course 2', 'img/course2.jpg', 149.99),
('AI Course 3', 'This is a description for AI Course 3', 'img/course3.jpg', 199.99);