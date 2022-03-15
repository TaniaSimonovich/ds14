class Header{
    create(){
        const element = document.createElement('div');
        element.classList.add('header')
        element.innerHTML = `
        
        <img class = "logo" src = "https://i.pinimg.com/236x/da/8d/3c/da8d3c180a80a0f10a7f009a08466186.jpg">
        <div class = "mainTitlDiv">
        <div class = "titlHeader home">Home</div>
        <div class = "titlHeader">Shop</div>
        <div class = "titlHeader">Contact</div>
        </div>
        <div class = "bskt">
        <img src = "https://cdn-icons-png.flaticon.com/512/82/82632.png" class = "basketImg">
        <div class = "numberBusket"></div>
        <div class = "basketCost"></div>
        </div>`
        document.body.appendChild(element);
    }

    init(){
        this.create();
    }
}

const header = new Header().init();
export {header};