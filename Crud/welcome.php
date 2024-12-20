<?php
session_start();

if (!isset($_SESSION['user'])) {
    header("Location: login.php"); 
    exit;
}

$user = $_SESSION['user'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body style="background: linear-gradient(140deg, purple, pink, violet); height: 100vh;">

<div class="container mt-5" style="background: rgb(255, 255, 255, 0.5); padding: 50px; border-radius: 20px;">
    <h3>Welcome, <?php echo htmlspecialchars($user['Email']); ?>!</h3>
    <p>You have successfully logged in.</p>
    <a href="logout.php" class="btn btn-danger">Logout</a>
</div>

</body>
</html>
