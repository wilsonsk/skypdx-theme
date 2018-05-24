<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$servername = "localhost";
$username = "root";
$password = "baylor24";
$dbname = "wp_ng_sass_material";
$conn = new mysqli($servername, $username, $password, $dbname);
?>
