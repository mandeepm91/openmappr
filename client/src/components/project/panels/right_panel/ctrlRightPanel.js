angular.module('common')
.controller('RightPanelCtrl', ['$scope', 'FilterPanelService', 'BROADCAST_MESSAGES',
function($scope, FilterPanelService, BROADCAST_MESSAGES) {
    'use strict';

    /*************************************
    ************ Local Data **************
    **************************************/
    // var logPrefix = '[ctrlRightPanel: ] ';

    /*************************************
    ********* Scope Bindings *************
    **************************************/
    /**
    *  Scope data
    */

    /**
    * Scope methods
    */
    $scope.rightPanelExited = function() {
        $scope.$broadcast(BROADCAST_MESSAGES.rightPanelExited);
    };

    /*************************************
    ****** Event Listeners/Watches *******
    **************************************/

    /*************************************
    ********* Initialise *****************
    **************************************/

    /*************************************
    ********* Core Functions *************
    **************************************/


}
]);