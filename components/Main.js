import App from './app.js'
let buskets = [];
class Main{
    create(){
        let app = new App();
        app.ProductLocalStorage().then(() => {
        const allelement = document.createElement('div');
        allelement.classList.add('main')
        allelement.classList.add('grid')
        allelement.innerHTML = ``
        // console.log(localStorage.getItem('product'))
        const data = JSON.parse(localStorage.getItem('product'))
        data.forEach(function(element,id){
            const newProduct = document.createElement('div');
            newProduct.innerHTML = `
            <div class = "cardProduct">
            <div class = "id">${element.id}</div>
            <img class = "imgProd" src = "${element.image}">
            <div class ="titleProd">${element.title}</div>
            <div class = "textProd">${element.description}</div>
            <div class = "priceText">price</div>
            <div class = "price"> ${element.price}</div>
            <button class ="btn">В корзину</button>
            </div>
            `
            allelement.appendChild(newProduct);
        })
        document.body.appendChild(allelement)
        this.onClickButton();
        this.onClickBuskets();
        this.img();
        this.home();
    })
    }
    
    onClickButton(){
        const button = Array.prototype.slice.call(document.querySelectorAll('button'));
        console.log(button)
        button.forEach(function(element,id){
            element.addEventListener('click',function(event){
                const dataGetCookie = JSON.parse(localStorage.getItem('product'))
                dataGetCookie.forEach(function(element,id){
                    if(id == (event.target.parentElement.children[0].textContent - 1) ){
                        document.cookie = `${event.target.parentElement.children[2].textContent} = ${JSON.stringify(element)}`;
                        buskets.push(element)
                    }
                })
                let bskt = document.querySelector('.bskt');
                let numberBusket = bskt.querySelector('.numberBusket');
                numberBusket.innerHTML = `${buskets.length}`;
                console.log(buskets)

                let costBusket = bskt.querySelector('.basketCost');
                let sum = 0;
                buskets.forEach(function(element,id){
                    sum += element.price;
                })
                costBusket.innerHTML = `${sum} $`
            })
        })
        
        // console.log(buskets)
    }

    onClickBuskets(){
        let imgBuskets = document.querySelector('.basketImg');
        imgBuskets.addEventListener('click', function(){
            let main = Array.prototype.slice.call(document.querySelectorAll('.main'));
            main.forEach((el, id) => {
                console.log(el)
                el.classList.remove('grid')
                el.classList.add('none')
            })
            let busketsDiv = document.createElement('div');
            buskets.forEach(function(element,id){
                let busketsProduct = document.createElement('div');
                busketsProduct.innerHTML = `
                <div class = "cardProduct">
                <div class = "id">${element.id}</div>
                <img class = "imgProd" src = "${element.image}">
                <div class ="titleProd">${element.title}</div>
                <div class = "textProd">${element.description}</div>
                <div class = "priceText">price</div>
                <div class = "price"> ${element.price}</div>
                <button class ="btn">Удалить</button>
                </div>
                `
                busketsDiv.appendChild(busketsProduct)
            })
            document.body.appendChild(busketsDiv)
            busketsDiv.classList.add('grid')
            busketsDiv.classList.add('left')
        })
    }

    img(){
        let productImg = Array.prototype.slice.call(document.querySelectorAll('.imgProd'))
        productImg.forEach((el,id) => {
            el.addEventListener('click', (event) => {
                console.log(event.target)
                let main = Array.prototype.slice.call(document.querySelectorAll('.main'));
                main.forEach((el, id) => {
                    console.log(el)
                    el.classList.remove('grid')
                    el.classList.add('none')
                })
                const dataGetCookie = JSON.parse(localStorage.getItem('product'))
                dataGetCookie.forEach(function(element,id){
                    if(id == (event.target.parentElement.children[0].textContent - 1) ){
                        let product = document.createElement('div');
                        product.innerHTML = `
                                <div class ="newPr flex">
                                <div class = "id">${element.id}</div>
                                <img class = "imgProdNew" src = "${element.image}">
                                <div class = "info">
                                <div class ="titleProd titleProdNew">${element.title}</div>
                                <div class = "textProd textProdNew">${element.description}</div>
                                <div class = "priceText"Text>price</div>
                                <div class = "price"> ${element.price}</div>
                                <button class = "btn"> в корзину </button>
                                </div>
                                </div>
                                `
                        document.body.appendChild(product)
                    }
                })

            })
        })
    }

    home(){
        let home = document.querySelector('.home');
        home.addEventListener('click', () => {
            let productCard = Array.prototype.slice.call(document.querySelectorAll('.newPr'))
            productCard.forEach((el,id) => {
                el.classList.remove('flex')
                el.classList.add('none')
            })
            let main = Array.prototype.slice.call(document.querySelectorAll('.main'));
                main.forEach((el, id) => {
                    console.log(el)
                    el.classList.remove('none')
                    el.classList.add('grid')
                })
        })
    }

    // getCookie(name) {
    //     var matches = document.cookie.match(new RegExp(
    //         '(?:^|\s)' + name.replace(/([.$?*+\\\/{}|()\[\]^])/g, '\\$1') + '=(.*?)(?:;|$)'));
    //     return matches ? decodeURIComponent(matches[1]) : undefined;
    // }

    // numberBuskets(){
    //     let bskt = document.querySelector('.bskt');
    //     let numberBusket = bskt.querySelector('.numberBusket');
    //     numberBusket.innerHTML = `${buskets.length}`;
    //     console.log(buskets)
    // }


    init(){
        this.create();
        return this.create();
    }
}

const main = new Main().init();
export {main};