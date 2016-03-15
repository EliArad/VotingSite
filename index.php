<!DOCTYPE html>
<html>
<head>

    <title>easwdev@gmail.com - Eli Arad</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <link rel="stylesheet" type="text/css" href="client/styles/main.css">

    <script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>

    <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
    <script type="text/javascript" src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
    <script type="text/javascript" src="bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
    <script type="text/javascript" src="bower_components/angular-cookies/angular-cookies.min.js"></script>

    <script type="text/javascript" src="client/app.js"></script>
    <script type="text/javascript" src="client/routing.js"></script>


    <script type="text/javascript" src="client/controllers/homeController.js"></script>
    <script type="text/javascript" src="client/controllers/HeaderController.js"></script>


    <script type="text/javascript" src="client/services/authtoken.js"></script>
    <script type="text/javascript" src="client/services/authIntercepter.js"></script>



</head>
<body ng-app="app">
    <div ui-view=""></div>
</body>
</html>
