import angular from 'angular';

let MallComponent = {
  template: `
        <div class="container-fluid">
          <h1>Welcome to the Openshift Mall!</h1>
        </div>
    `,
  controller: () => new MallController()
};

class MallController { }

angular
  .module('openshiftMall', [])
  .component('mall', MallComponent);

/*
  Comment Out the code block below to use within origin-web-console (causes 'angular loaded twice' error)
*/

angular
  .element(document)
  .ready(() => angular.bootstrap(document, ['openshiftMall']));

export default MallController;
