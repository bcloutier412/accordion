/*
create a header array
target all 3 of the div content containers

variable that represents the the element that is active

*/
const headersArray = Array.from(document.getElementsByClassName('accordion-title'))
const contentsArray = Array.from(document.getElementsByClassName('accordion-content'))
const mainContainer = document.getElementsByClassName('accordion')
let activeElement = contentsArray[0]

mainContainer[0].addEventListener('click', (e) => {
    eventTarget = e.target
    if (eventTarget.className === 'accordion-title') {
        headerIndex = headersArray.indexOf(e.target)
        content = contentsArray[headerIndex]
        content.classList.toggle('hidden')
        if (activeElement === content) {
            activeElement = undefined;
        } else if (!activeElement) {
            activeElement = content;
        } else {
            activeElement.classList.toggle('hidden')
            activeElement = content;
        }
    }
})