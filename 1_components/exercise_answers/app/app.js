/*
  Angular 2 HEllo world exercise
*/

var AppComponent = ng.core
  .Component({
    selector: 'app',
    template:
      `
        <h1>Hello World</h1>
      `
  })
  .Class({
    constructor: function() {}
  });

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, []);
});
