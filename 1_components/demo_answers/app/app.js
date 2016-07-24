var AppComponent = ng.core
  .Component({
    selector: 'app',
    template:
      `
        <p>hello!</p>
        <p>Hello again</p>
      `
  })
  .Class({
    constructor: function() {}
  });

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, []);
});
