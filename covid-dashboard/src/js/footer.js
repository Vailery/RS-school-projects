export default function footer(context) {
    const container = document.createElement('div');
    container.className = ('title-inner-container container-fluid m-0 p-1 d-flex justify-content-center align-items-center footer');
    container.innerHTML = '<a href="https://github.com/Vailery"> Vailery </a> | <a href="https://github.com/Riba0017"> Riba0017 </a>'

    return container;
}