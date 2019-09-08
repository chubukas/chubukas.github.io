<?php
    
    // error_reporting (1);
    // $con = mysqli_connect('localhost','root','password')or die("cannot connect to server");
    // mysqli_select_db($con,'database')or die("cannot connect to database");


    $theFile = fopen("connect.php","r") or die("cannot open file");

    echo  fread($theFile,filesize("connect.php"));

    fclose($theFile);
?>