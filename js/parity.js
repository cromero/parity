angular.module('parity', [])
    .controller('ParityNavCtrl', function($log, $scope) {
        // This simple controller just takes care of navigation and
        // switching between modes. We may use ngroute if necessary in
        // the future, but that seems like overkill for now.
        $scope.modes = [
            {name: 'Edit', template: 'edit.html'},
            {name: 'Play', template: 'play.html'},
        ];
        var _mode = $scope.modes[0];

        // This behavior updates the active mode and saves any state
        // necessary.
        $scope.mode = function(newmode) {
            $log.debug('mode with params:' + angular.toJson(newmode));
            if(newmode) {
                _mode = newmode;
            } else {
                return _mode;
            }
        };
    });
