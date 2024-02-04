<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>React With Laravel</title>
    @vite(['resources/js/app.js']);
    @vite(['resources/css/app.css']);
</head>

<body>
<h1 class="text-center">Laravel CRUD With React</h1>
<div class="container mt-5">
    <div id="app"></div>
</div>
</body>
</html>
