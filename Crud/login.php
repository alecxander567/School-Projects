<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body style="background: linear-gradient(140deg, purple, pink, violet); background-repeat: no-repeat; height: 100vh; display: flex; align-items: center; justify-content: center;">

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

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if (!empty($email) && !empty($password)) {
        $stmt = $conn->prepare("SELECT * FROM mydb WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 1) {
            $user = $result->fetch_assoc();
            if (password_verify($password, $user['password'])) {
                $_SESSION['user'] = $user;
                header("Location: welcome.php");
                exit;
            } else {
                echo "<div class='alert alert-danger' style='width: 100%; top: -255px; text-align: center; font-size: 20px; font-weight: 900;'>Invalid password!</div>";
            }
        } else {
            echo "<div class='alert alert-danger' style='position: relative; top: -255px; width: 100%; text-align: center; font-size: 20px; font-weight: 900; border: none;'>No account found with this email!</div>";
        }
        $stmt->close();
    } else {
        echo "<div class='alert alert-warning'>All fields are required</div>";
    }
}

$conn->close();
?>

<div class="container mt-5" style="width: 500px; height: 500px; box-shadow: 0 0 10px; border-radius: 20px; padding: 30px 20px; background: rgb(255, 255, 255, 0.5); position: absolute; bottom: px;">
    <h3 style="text-align: center; font-weight: 900;">Login</h3>
    <form method="POST" action="" style="display: grid; margin-top: 30px;">
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Enter email..." required>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Enter password..." required>
        </div>
        <button type="submit" name="login" class="btn btn-primary" style="font-weight: 900;">Login</button>
        <p style="text-align: center; margin-top: 50px;">Don't have an account?</p>
        <a type="submit" name="login" class="btn btn-success" href="signup.php" style="font-weight: 900;">Sign up</a>
    </form>
</div>

</body>
</html>
