<?php
    // Database connection
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "database";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get selected course
    $selectedCourse = $_POST['selectedCourse'];

    // Purchase course
    function purchaseCourse($selectedCourse) {
        global $conn;

        $sql = "UPDATE Courses SET purchased = 1 WHERE id = $selectedCourse->id";

        if ($conn->query($sql) === TRUE) {
            echo "purchaseSuccess";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    // Call purchaseCourse function
    purchaseCourse($selectedCourse);

    $conn->close();
?>