
// (click)="onClick()">
// Passing Events (keyup)="onChange($event)"
// xml style syntax on-click
// (submit)

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <a (click)="handleClick()">Don't Click Me {{catName}}!!!</a>
      <hr />
      <input (input)="handleInput($event)"/>
    `
  })
  .Class({
    constructor: function() {
      this.catName = "";
      this.handleClick = () => {
        this.catName = "Davey";
        // console.log('clicked!!!');
      }
      this.handleInput = (evt) => {
        this.catName = evt.target.value
      }
    }
  })


document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});




// Initial State

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     template:
//     `

//     `
//   })
//   .Class({
//     constructor: function() {

//     }
//   })

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });


// Final State

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     template:
//     `
//       <a on-click="handleClick($event)">Click</a>
//       <br />
//       <input on-input="value = $event.target.value" />
//       {{value}}

//       <form on-submit="submitted = true">
//         <input />
//         <button>submit</button>
//         {{submitted}}
//       </form>
//     `
//   })
//   .Class({
//     constructor: function() {
//       this.handleClick = function(evt) {
//         console.log('clicked');
//       }
//       this.handleInput = function(evt) {
//         console.log(evt);
//         this.value = evt.target.value;
//       }
//     }
//   })


// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });
