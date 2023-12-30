<?php
// Ваш URL
$url = 'https://example.com/your_api';

// Ваши данные для POST запроса
$data = array(
    'key1' => 'value1',
    'key2' => 'value2',
);

// Инициализация curl
$ch = curl_init();

// Настройка curl
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt(
    $ch,
    CURLOPT_POST,
    true
);
curl_setopt(
    $ch,
    CURLOPT_POSTFIELDS,
    http_build_query($data)
);
// Выполнение запроса
$result = curl_exec($ch);

if ($result === false) {
    echo 'Curl error: ' . curl_error($ch);
} else {
    echo $result;
}