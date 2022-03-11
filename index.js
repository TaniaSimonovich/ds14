

// data.forEach(function(element,id){
//     const newProduct = document.createElement('div');
//     newProduct.innerHTML = `
//     <div>
//     <img src = "${element.data.image}">
//     <div>${}</div>
//     </div>
//     `
//     document.body.appendChild(newProduct);
// })

import App from './components/app.js'
import {footer} from './components/Footer.js'
import {header} from './components/Header.js'
import {main} from './components/Main.js'
import {nav} from './components/Nav.js'
let app = new App();
console.log(app);
console.log(footer);
console.log(header);
console.log(main);
console.log(nav);
app.init();

    // window.location.href = "http://localhost/"


// const getProductLocalStorage = function(){
//     if (localStorage.setItem('product').lenght === 0){
//     ProductLocalStorage().then(function(){
//     body();
// });} else{
//     body();
// }
// };

// getProductLocalStorage();


// let body = function(){
//     import App from './components/app.js'
//     import {footer} from './components/Footer.js'
//     import {header} from './components/Header.js'
//     import {main} from './components/Main.js'
//     import {nav} from './components/Nav.js'
//     let app = new App();
//     console.log(app);
//     console.log(footer);
//     console.log(header);
//     console.log(main);
//     console.log(nav);
//     app.init();
// }
// console.log(app.init())
// // import('./components/app.js').then(function(App){
// //     App.init()
// // })


