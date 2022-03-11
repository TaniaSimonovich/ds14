export default class App{

    create(){
        const element = document.createElement('div');
        element.classList.add('app')
        return element;
    }

    render(){
        const element = this.create();
        document.body.append(element);
        console.log(element)
    }

    ProductLocalStorage = async function(){
        let data = [];
        let url = 'https://fakestoreapi.com/products'
        await fetch(url).then (function(response){
            console.log(response)
            return response.json();
            }).then(function(data){
                console.log(data);
                data.forEach(function(element,id){
                    localStorage.setItem('product', JSON.stringify(data));
                });
        })
    };

    init(){
        this.create();
        this.render();

        let title = document.createElement('title');
        title.innerHTML = 'document';

        let metaUtf8 = document.createElement('meta');
        metaUtf8.setAttribute('charset', 'UTF-8');

        let link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', './style.css');

        document.head.appendChild(title);
        document.head.appendChild(metaUtf8);
        document.head.appendChild(link);
    }
}

let app = new App();

