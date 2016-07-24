// Live binding - setInterval, zones

// bind to a function on the class
// functions should not have side effects


var AppComponent = ng.core
  .Component({
    selector: "app",
    template:`
      age: {{catAge}}
      alive: {{isAlive()}}
    `
  })
  .Class({
    constructor: function() {
      this.catAge = 1;
      this.isAlive = () => this.catAge < 22;
      setInterval(() => {this.catAge ++}, 10);
    }
  });

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});










// Exercise Start
// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     template:`
//       age: {{catAge}}
//       alive: {{isAlive()}}
//     `
//   })
//   .Class({
//     constructor: function() {
//       this.catAge = 1;
//       this.isAlive = () => this.catAge < 22;
//     }
//   });



// Exercise Goal
// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     template:`
//       age: {{catAge}}
//       alive: {{isAlive()}}
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       this.catAge = 1;
//       vm.isAlive = function isAlive() {
//         return this.catAge < 15;
//       };
//       setInterval(function() {
//         vm.catAge++;
//         // console.log(this);
//       }, 100);
//     }
//   });




// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });


