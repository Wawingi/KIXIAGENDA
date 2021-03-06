<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- 
    <script src="{{ asset('js/app.js') }}" defer></script>

    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
   
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">-->

    <!-- App favicon -->
    <link rel="shortcut icon" href="https://coderthemes.com/minton/layouts/assets/images/favicon.ico">

    <!-- App css -->
    <link href="{{ asset('css/app.min.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet" type="text/css"/>
    
    <!-- icons -->
    <link href="{{ asset('css/icons.min.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('css/estilo.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('css/datatables2.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('css/sweetalert2.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="https://cdn.jsdelivr.net/npm/vue-loading-overlay@2/dist/vue-loading.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/vue-loading-overlay@2"></script>
</head>
<body>
    <div id="app"></div>

    <!-- App js -->   
    <script src="{{ asset('js/jquery-3.4.1.js') }}"></script>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <script src="{{ asset('js/additional-methods.js') }}"></script>
    <script src="{{ asset('js/sweetalert2.min.js') }}"></script>
    <script src="{{ asset('js/datatables2.min.js') }}" defer></script>
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/app.min.js') }}"></script>
    
    <!--<script src="{{ asset('js/vendor.min.js') }}"></script>-->
</body>
</html>
