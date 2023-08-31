//Croussel

class Carousel {

    /**
     * 
     * @param {HTMLElement} element 
     * @param {Object} options.slidesToScroll Nombre d'éléments à faire défiler
     * @param {Object} options.slidesToVisible Nombre d'"l"ments visible dans un slide
     */
 
    constructor (element, options = {}) {
 this.element = element
 this.options = Object.assign({}, {
    slidesToScroll: 1,
    slidesToVisible: 1
 }, options)
 this.children = [].slice.call(element.children)
 let root = this.createDivWithClass('carousel')
 let container = this.createDivWithClass('carousel_container')
 root.appendChild(container)
 this.element.appendChild(root)
 this.children.forEach( (child) => {
   let item =  this.createDivWithClass('carousel_item')
   item.appendChild(child)
    container.appendChild(child)
 })
    }
 
    createDivWithClass (className) {
       let div = document.createElement("div")
       div.setAttribute('class', className)
       return div
    }
 
 /**
  * @param {string} className
  * @returns {HTMLElement}
  */
 
 
 
 }
 
 document.addEventListener('DOMContentLoaded', function () {
 
 
 
 new Carousel(document.querySelector('#carousel1'), {
    slidesToScroll:3,
    slidesToVisible:3
 })
 })
 