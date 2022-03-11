class Footer{
    create(){
        const element = document.createElement('div');
        element.classList.add('footer')
        element.innerHTML = ``
        // return element;
    }

    init(){
        this.create();
        return this.create();
    }
}

const footer = new Footer().init();
export {footer};