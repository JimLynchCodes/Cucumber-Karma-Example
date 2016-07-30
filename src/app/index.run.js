(function() {
  'use strict';

  angular
    .module('cucumberKarmaExample')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
