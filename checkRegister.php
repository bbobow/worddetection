<?php
	session_start();
	require_once("connectSQL.php");

	$isOK = true;
	if(trim($_POST["username"]) == "") {
		echo "Please input Username!<br>";
		$isOK = false;
	}
	if(trim($_POST["fname"]) == "") {
		echo "Please input Firstname!<br>";
		$isOK = false;
	}
	if(trim($_POST["lname"]) == "") {
		echo "Please input Lastname!<br>";
		$isOK = false;
	}
	if(trim($_POST["password"]) == "") {
		echo "Please input Password!<br>";
		$isOK = false;
	}	
	if($_POST["password"] != $_POST["conpassword"]) {
		echo "Password not Match!<br>";
		$isOK = false;
	}
	if (!$isOK) {
		echo "<br>Please go back to <a href='tot.php'>Registration page</a> and try again";
	} else {
		$strSQL = "SELECT * FROM user WHERE username = '".trim($_POST['username'])."' ";
		$result = mysqli_query($con,$strSQL);
		if (mysqli_fetch_array($result)) {
			echo "Username already exists!<br>";
			echo "<br>Please go back to <a href='tot.php'>Registration page</a> and try again";
		} else {	
			$strSQL = "INSERT INTO user (username,password,firstname,lastname,email,usergroup) VALUES (".
				"'".$_POST["username"]."',".
				"'".$_POST["password"]."',".
				"'".$_POST["fname"]."',".
				"'".$_POST["lname"]."',".
				"'".$_POST["email"]."',".
				"'user')";	
			mysqli_query($con,$strSQL);
			echo "Register Completed!<br>";		
			echo "<br>Please go to <a href='tot.php'>Login page</a>";
		}
	}
	mysqli_close($con);
?>