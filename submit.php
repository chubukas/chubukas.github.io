<?php 

// include "connect.php";

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}


if(isset($_POST["submit"])){

    $i = date("i")-1;
    $time = date("d F Y h:$i:sa");
    $title = test_input($_POST["title"]);
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    $message = test_input($_POST["message"]);


    // $qry="insert into customers values('',' $name','$email','$title','$message','$time')";
 
    // mysqli_query($con,$qry);

    $theFile = fopen("connect.txt","a+") or die("unable to create file");

    $txt = $name ." | ". $email." | ". $title." | ". $message." | ".$time ;

    fwrite($theFile, $txt);

    fclose($theFile);

    $name = $email =  $title = $message = $time = "";

    header("location:connect.php");


}





?>



