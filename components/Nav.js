class Nav{
    create(){
        const element = document.createElement('div');
        element.classList.add('nav')
        element.innerHTML = ``
        return element;
    }

    init(){
        this.create();
        return this.create();
    }
}

const nav = new Nav().init();
export {nav};