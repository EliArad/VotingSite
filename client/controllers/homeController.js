'use strict';

app.controller('homeController', ['$scope', '$state', 'authToken','$window',
    function ($scope, $state, authToken,$window) {


        $scope.voteLeft = 70;
        $scope.voteRight = 50;

        // In your controller
        var w = angular.element($window);
        $scope.$watch(
            function () {
                checkSize();
                return $window.innerWidth;
            },
            function (value) {
                $scope.windowWidth = value;
            },
            true
        );

        w.bind('resize', function(){
            $scope.$apply();
        });

        // Global state variable
        var winSize = '';

        $scope.replaceSignIn = function()
        {
            document.getElementById('siginid').src = '/client/images/sigin_over.png';
        }
        $scope.replaceSignOut = function()
        {
            document.getElementById('siginid').src = '/client/images/sigin_normal.png';
        }

        $(window).resize(function(){


            checkSize();
        });

        function checkSize()
        {

            console.log($window.innerWidth);

            var newWinSize = 'xs'; // default value, check for actual size

            if ($window.innerWidth >= 1200) {
                newWinSize = 'lg';
            } else if ($window.innerWidth >= 992) {
                newWinSize = 'md';
            } else if ($window.innerWidth >= 768) {
                newWinSize = 'sm';
            }

            if( newWinSize != winSize ) {
                console.log(newWinSize);
                doSomethingOnSizeChange(newWinSize);
                winSize = newWinSize;
            }

        }

        $scope.ShareThisCompetition = function()
        {
            alert("shared this");
        }

        function doSomethingOnSizeChange(size)
        {

            switch (size) {
                case 'lg':
                    document.getElementById('yt1').style.height = '35vh';
                    document.getElementById('yt2').style.height = '35vh';
                    document.getElementById('if1').style.height = '35vh';
                    document.getElementById('if2').style.height = '35vh';
                    document.getElementById('transparentdiv').style.marginTop = '-16%';

                break;
                case 'md':
                    document.getElementById('yt1').style.height = '44vh';
                    document.getElementById('yt2').style.height = '44vh';
                    document.getElementById('if1').style.height = '44vh';
                    document.getElementById('if2').style.height = '44vh';
                    document.getElementById('transparentdiv').style.marginTop = '-10%';
                break;
                case 'sm':
                    console.log('sm');
                    document.getElementById('yt1').style.height = '30vh';
                    document.getElementById('yt2').style.height = '30vh';
                    document.getElementById('if1').style.height = '30vh';
                    document.getElementById('if2').style.height = '30vh';
                    document.getElementById('transparentdiv').style.marginTop = '-25%';
                break;
                case 'xs':
                    document.getElementById('yt1').style.height = '30vh';
                    document.getElementById('yt2').style.height = '30vh';
                    document.getElementById('if1').style.height = '30vh';
                    document.getElementById('if2').style.height = '30vh';
                    document.getElementById('transparentdiv').style.marginTop = '0%';
                break;
            }
        }

        $scope.Vote = function(direction)
        {
            if (direction == 'left')
            {
                document.getElementById('startimageleft').src = '/client/images/Star_yellow.png';
                document.getElementById('startimageright').src = '/client/images/Star_Grey.png';
                $scope.voteLeft++;
            } else {
                $scope.voteRight++;
                document.getElementById('startimageright').src = '/client/images/Star_yellow.png';
                document.getElementById('startimageleft').src = '/client/images/Star_Grey.png';
            }
        }

    }

]);