
<?php

$method = $_POST["method"];
if($method=='messagss.send'){
    echo json_encode(["response"=>1]);
}else{
    echo json_encode(["error" => ["error_code"=>1,"error_msg"=>"method not found"]]);
}
