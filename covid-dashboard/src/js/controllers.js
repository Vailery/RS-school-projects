import { changeListOnCountry } from '../js/changeInfoList.js';
import { createMarkers } from '../js/getMarkerForMap.js';
import updateGraph from "../js/addGraph.js";

export default function controllers(context) {
    const container = document.createElement('div');
    container.className = ('menu-adaptive-container container-fluid p-0 justify-content-between align-items-center'); //

    const cFirst = document.createElement('div');
    const cSecond = document.createElement('div');
    const cThird = document.createElement('div');
    const cFourth = document.createElement('div');
    const cFifth = document.createElement('div');

    cFirst.className = 'first-column m-0 p-0 col-2 fs-6';
    cSecond.className = 'second-column m-0 p-0 col-2 fs-6';
    cThird.className = 'third-column m-0 p-0 col-2 fs-6';
    cFourth.className = 'fourth-column m-0 p-0 col-2 fs-6';
    cFifth.className = 'fifth-column m-0 p-0 col-2 fs-6';

    const all = context.optAllLastDay === 'all' ? '<span><b>All</b></span>' : '<span>All</span>';
    const day = context.optAllLastDay === 'all' ? '<span>Last day</span>' : '<span><b>Last day</b></span>';
    const total = context.optTotalPer100 === 'total' ? '<span><b>Total</b></span>' : '<span>Total</span>';
    const per100 = context.optTotalPer100 === 'total' ? '<span>100k people</span>' : '<span><b>100k people</b></span>';
    const confirmed = context.dataToShow === 'confirmed' ? '<span><b>Confirmed</b></span>' : '<span>Confirmed</span>';
    const deaths = context.dataToShow === 'deaths' ? '<span><b>Deaths</b></span>' : '<span>Deaths</span>';
    const recovered = context.dataToShow === 'recovered' ? '<span><b>Recovered</b></span>' : '<span>Recovered</span>';

    cFirst.innerHTML = `${all} | ${day}`;
    cSecond.innerHTML = `${total} | ${per100}`;
    cThird.innerHTML = `${confirmed}`;
    cFourth.innerHTML = `${deaths}`;
    cFifth.innerHTML = `${recovered}`;

    container.appendChild(cFirst);
    container.appendChild(cSecond);
    container.appendChild(cThird);
    container.appendChild(cFourth);
    container.appendChild(cFifth);


    container.addEventListener('click', (e) => {
        if (e.target.parentNode.parentNode.className.includes('table-container')) {
            return;
        };
        const value = e.target.textContent;
        context.changeFilterControllers()(value);

        let val = e.target.textContent.toLowerCase();
        if (val !== 'confirmed' && val !== 'deaths' && val !== 'recovered') {
            return;
        }
        val = val === 'recoveries' ? 'recov' : val;
        context.dataToShow = val;

        const newAll = context.optAllLastDay === 'all' ? '<span><b>All</b></span>' : '<span>All</span>';
        const newDay = context.optAllLastDay === 'all' ? '<span>Last day</span>' : '<span><b>Last day</b></span>';
        const newTotal = context.optTotalPer100 === 'total' ? '<span><b>Total</b></span>' : '<span>Total</span>';
        const newPer100 = context.optTotalPer100 === 'total' ? '<span>100k people</span>' : '<span><b>100k people</b></span>';
        const confirmed = context.dataToShow === 'confirmed' ? '<span><b>Confirmed</b></span>' : '<span>Confirmed</span>';
        const deaths = context.dataToShow === 'deaths' ? '<span><b>Deaths</b></span>' : '<span>Deaths</span>';
        const recovered = context.dataToShow === 'recovered' ? '<span><b>Recovered</b></span>' : '<span>Recovered</span>';

        cFirst.innerHTML = `${newAll} | ${newDay}`;
        cSecond.innerHTML = `${newTotal} | ${newPer100}`;
        cThird.innerHTML = `${confirmed}`;
        cFourth.innerHTML = `${deaths}`;
        cFifth.innerHTML = `${recovered}`;

        changeListOnCountry(context, e);
        createMarkers(context);
        updateGraph(context);

        const dom = context.getInfoForList(context);
        const listRow = document.querySelector('.list-row');
        const listRowChildren = document.querySelector('.list-row').children[1];
        listRowChildren.remove();
        listRow.appendChild(dom);


        return;
    });


    return container;
}