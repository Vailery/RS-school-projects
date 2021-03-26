function indexFotter() {
    const fragment = document.createDocumentFragment();

    const fotter = document.createElement('fotter');
    fragment.append(fotter);

    const main = document.createElement('div');
    main.classList.add('fotter');

    fragment.querySelector('fotter').appendChild(main);

    main.innerHTML = '<div><span>Author: <a href="https://github.com/Vailery">Vailery</a> | </span><span>2020 | </span><span><a href="https://rs.school/js/"><img src="img/rs_school_js.svg" alt="RSSchool" width="200"></a></span></div>'

    document.body.appendChild(fragment);
}

export default indexFotter;