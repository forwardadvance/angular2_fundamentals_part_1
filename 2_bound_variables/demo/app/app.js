// bind an expression
// bind an attribute on the class
// vm variable

// bind to a function on the class
// functions should not have side effects


var AppComponent = ng.core
  .Component({
    selector: "app",
    template:`
      Tortoise Name: {{tortoiseName}}
      <br />
      Tortoise age: {{tortoiseAge}}
      <br />
      Tortoise is alive: {{tortoiseIsAlive()}}
    `
  })
  .Class({
    constructor: function() {
      this.tortoiseName = 'Terry Wogan';
      this.tortoiseAge = 85;
      this.tortoiseMaxAge = 150;
      this.tortoiseIsAlive = () => {
        return this.tortoiseAge < this.tortoiseMaxAge;
      }
    }
  });

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});




// Initial State
// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     template:``
//   })
//   .Class({
//     constructor: function() {
//     }
//   });

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });


