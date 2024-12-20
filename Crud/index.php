<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body style="background: linear-gradient(140deg, purple, pink, violet); background-repeat: no-repeat; height: 100vh auto; padding: 20px 50px 50px 50px;">

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_crud";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    if (!empty($username) && !empty($password) && !empty($email)) {
        $stmt = $conn->prepare("INSERT INTO mydb (username, password, email) VALUES (?, ?, ?)");
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
        $stmt->bind_param("sss", $username, $hashedPassword, $email);

        if ($stmt->execute()) {
            echo "<div class='alert alert-success'>Record added successfully</div>";
        } else {
            echo "<div class='alert alert-danger'>Error: " . $stmt->error . "</div>";
        }
        $stmt->close();
    } else {
        echo "<div class='alert alert-warning'>All fields are required</div>";
    }
}

if (isset($_GET['delete'])) {
    $id = intval($_GET['delete']);
    $stmt = $conn->prepare("DELETE FROM mydb WHERE id = ?");
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo "<div class='alert alert-success'>Record deleted successfully</div>";
    } else {
        echo "<div class='alert alert-danger'>Error deleting record: " . $stmt->error . "</div>";
    }
    $stmt->close();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['edit'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];

        if ($stmt->execute()) {
            echo "<div class='alert alert-success'>Record updated successfully</div>";
        } else {
            echo "<div class='alert alert-danger'>Error updating record: " . $stmt->error . "</div>";
        }
            $stmt->close();
}

$sql = "SELECT * FROM mydb";
$result = $conn->query($sql);
?>

<div class="container mt-3" style="width: 100%; border-radius: 20px;">
  <header style="background: #28282B; color: white; padding: 10px; width: 100%;"><h2>DashBoard</h2><br><p>Create, Read, Update, Delete</p></header>

  <table class="table table-dark">
    <thead>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Password</th>
        <th>Email</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    <?php
      if ($result->num_rows > 0) {
          while ($row = $result->fetch_assoc()) {
              echo "<tr>
                      <td>" . htmlspecialchars($row['id']) . "</td>
                      <td>" . htmlspecialchars($row['username']) . "</td>
                      <td>[PROTECTED]</td>
                      <td>" . htmlspecialchars($row['Email']) . "</td>
                      <td><a href='edit.php?id=" . $row['id'] . "' class='btn btn-primary btn-sm' style='width: 50px;'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-pen-fill' viewBox='0 0 16 16'>
  <path d='m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001'/>
</svg></a></td>
                      <td><a href='?delete=" . $row['id'] . "' class='btn btn-danger btn-sm' style='width: 50px;'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash3-fill' viewBox='0 0 16 16'>
  <path d='M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5'/>
</svg></a></td>
                    </tr>";
          }
      } else {
          echo "<tr><td colspan='6'>No records found</td></tr>";
      }
      ?>
    </tbody>
  </table>
</div>

<div id="add-section" class="container mt-5" style="background: rgb(255, 255, 255, 0.5); padding: 20px; width: 100%;">
  <h3>Add Record</h3>
  <form method="POST" action="">
    <div class="mb-3">
      <label for="username" class="form-label">Username</label>
      <input type="text" class="form-control" id="username" name="username" required>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" name="password" required>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" name="email" required>
    </div>
    <button type="submit" name="add" class="btn btn-primary" style="width: 20%; padding: 10px; font-weight: 900;">Add</button>
  </form>
</div>

<?php
$conn->close();
?>

</body>
</html>
