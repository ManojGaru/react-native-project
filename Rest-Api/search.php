<?php

$servername = "localhost";
$username = "iwebsolutions_ecommerce_api";
$password = "123456Ea";
$dbname = "iwebsolutions_ecommerce_api";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$search_string = $_GET['search_param'];
$sql = "select products.id,products.name,category.id,category.product_id,category.cat_name,price.id,price.product_id,price.cat_id,price.price,price.gg_price from products LEFT JOIN category ON products.id = category.product_id LEFT JOIN price ON products.id = price.product_id WHERE (products.name LIKE $search_string OR category.cat_name LIKE $search_string OR price.price LIKE $search_string OR price.gg_price LIKE $search_string)";

$result = $conn->query($sql);
$data = [];
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        array_push($data,$row);
    }
}
echo json_encode($data);
$conn->close();
?>