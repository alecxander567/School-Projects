<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body style="background: linear-gradient(140deg, purple, pink, violet); background-repeat: no-repeat; height: 100vh;">

<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_crud";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['signup'])) {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    $confirmPassword = $_POST['confirmPassword'] ?? '';
    
    if (!empty($email) && !empty($password) && !empty($confirmPassword)) {
        if ($password === $confirmPassword) {
          
            if (preg_match('/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/', $password)) {
                $stmt = $conn->prepare("SELECT * FROM mydb WHERE email = ?");
                $stmt->bind_param("s", $email);
                $stmt->execute();
                $result = $stmt->get_result();

                if ($result->num_rows === 0) {
                    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
                    $stmt = $conn->prepare("INSERT INTO mydb (email, password) VALUES (?, ?)");
                    $stmt->bind_param("ss", $email, $hashedPassword);
                    if ($stmt->execute()) {
                        echo "<div class='alert alert-success' style='font-size: 20px; font-weight: 900; text-align: center;'>Account created successfully! You can now log in.</div>";
                    } else {
                        echo "<div class='alert alert-danger'>Something went wrong. Please try again.</div>";
                    }
                } else {
                    echo "<div class='alert alert-danger' style='text-align: center; font-size: 20px; font-weight: 900;'>Email already exists.</div>";
                }
                $stmt->close();
            } else {
                echo "<div class='alert alert-warning' style='font-size: 20px; font-weight: 900; text-align: center;'>Password must be 8-12 characters long, contain at least one uppercase letter, and one number.</div>";
            }
        } else {
            echo "<div class='alert alert-danger' style='font-size: 20px; font-weight: 900; text-align: center;'>Passwords do not match.</div>";
        }
    } else {
        echo "<div class='alert alert-warning'>All fields are required.</div>";
    }
}

$conn->close();
?>


<div class="container mt-5" style="width: 500px; height: 500px; box-shadow: 0 0 10px; border-radius: 20px; padding: 20px; background: rgb(255, 255, 255, 0.5); position: absolute; left: 390px; bottom: 20px;">
    <h3 style="text-align: center; font-weight: 900;">Sign Up</h3>
    <form method="POST" action="" style="display: grid;">
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Enter email..." required>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Enter password..." required>
        </div>
        <div class="mb-3">
            <label for="confirmPassword" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm password..." required>
        </div>
        <button type="submit" name="signup" class="btn btn-success" style="font-weight: 900;">Sign Up</button>
        <p style="text-align: center; margin-top: 30px;">Already have an account?</p>
        <a href="login.php" class="btn btn-primary" style="font-weight: 900;">Login</a>
    </form>
</div>

</body>
</html>
