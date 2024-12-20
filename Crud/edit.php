<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_crud";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    $stmt = $conn->prepare("SELECT * FROM mydb WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    $stmt->close();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['edit'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    if (!empty($username) && !empty($password) && !empty($email)) {
        $stmt = $conn->prepare("UPDATE mydb SET username = ?, password = ?, email = ? WHERE id = ?");
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
        $stmt->bind_param("sssi", $username, $hashedPassword, $email, $id);

        if ($stmt->execute()) {
            echo "<div class='alert alert-success'>Record updated successfully</div>";
        } else {
            echo "<div class='alert alert-danger'>Error updating record: " . $stmt->error . "</div>";
        }
        $stmt->close();
    } else {
        echo "<div class='alert alert-warning'>All fields are required</div>";
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Record</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body style="background:linear-gradient(140deg, purple, pink, violet); height: 100vh; background-repeat: no-repeat;">

<div class="container mt-5" style="background: rgb(255, 255, 255, 0.5); width: 100%; padding: 20px; border-radius: 20px;">
    <h3>Edit Record</h3>
    <form method="POST" action="">
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" name="username" value="<?php echo htmlspecialchars($row['username']); ?>" required>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password" value="" required>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" value="<?php echo htmlspecialchars($row['Email']); ?>" required>
        </div>
        <button type="submit" name="edit" class="btn btn-success">Update</button>
        <a class="btn btn-primary" href="index.php">Return</a>
    </form>
</div>

</body>
</html>
