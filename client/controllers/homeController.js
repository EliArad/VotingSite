'use strict';

app.controller('homeController', ['$scope', '$state', 'authToken',
    function ($scope, $state, authToken) {


        $scope.voteLeft = 70;
        $scope.voteRight = 50;

        $scope.replaceSignIn = function()
        {
            document.getElementById('siginid').src = '/client/images/sigin_over.png';
        }
        $scope.replaceSignOut = function()
        {
            document.getElementById('siginid').src = '/client/images/sigin_normal.png';
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