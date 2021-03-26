import { getCountries, summaryByCountry } from '../data.js';
import { changeListOnCountry } from './changeInfoList.js';
import { viewCountry } from './getMarkerForMap.js';
import updateGraph from "../js/addGraph.js";

export default function getInfoList(context) {
    const { dataToShow } = context;
    const container = document.createElement('div');
    container.className = ('container-fluid p-3 m-0 height-col2 align-self-stretch list-fluid');
    const columnNameTitle = document.createElement('div');
    const columnCasesTitle = document.createElement('div');
    columnNameTitle.className = 'col-3 m-0 p-0 fs-6 fw-bold';
    columnCasesTitle.className = 'col-9 m-0 p-0 ps-1 fs-6 fw-bold text-center';

    columnNameTitle.textContent = 'Country';
    let strTitle = "Confirmed";
    if (dataToShow === 'deaths') {
        strTitle = 'Deaths';
    }
    if (dataToShow === 'recovered') {
        strTitle = "Recovered";
    }
    columnCasesTitle.textContent = strTitle;

    const rowTitle = document.createElement('div');
    rowTitle.className = ('row justify-content-between p-1 align-items-center list-topic');
    rowTitle.appendChild(columnNameTitle);
    rowTitle.appendChild(columnCasesTitle);

    container.appendChild(rowTitle);

    summaryByCountry().then((info) => {
        const { Countries } = info;
        if (!Countries) {
            container.classList.add('pos-relative');
            container.appendChild(context.getOnLoadingScreen());
            return;
        }
        context.getFilterOfCountries()(Countries).map((i) => {
            const { Country, CountryCode, Slug, Premium: { CountryStats: { Population } }, TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed, NewDeaths, NewRecovered } = i;
            const row = document.createElement('div');
            row.className = ('row justify-content-center p-0 align-items-center list');
            const columnName = document.createElement('div');
            const columnFlag = document.createElement('div');
            const columnCases = document.createElement('div');
            columnName.className = ('col-6 m-0 fs-6');
            columnFlag.className = ('col-2 m-0 p-3 flag');
            columnCases.className = ('col-4 m-0 p-0 ps-1 fs-6');

            columnName.textContent = Country;
            columnFlag.style.backgroundImage = `url(https://www.countryflags.io/${CountryCode}/flat/32.png)`;
            columnFlag.style.backgroundRepeat = 'no-repeat';
            columnFlag.style.backgroundPosition = 'center';
            columnFlag.style.backgroundSize = 'initial';
            columnCases.textContent = context.getCorrectDataToTheList()(context, i);
            row.appendChild(columnName);
            row.appendChild(columnFlag);
            row.appendChild(columnCases);
            container.appendChild(row);

            row.addEventListener('mouseenter', (e) => {
                e.target.classList.add('bg-blue');
            });
            row.addEventListener('mouseleave', (e) => {
                e.target.classList.remove('bg-blue');
            });
            row.addEventListener('click', (e) => {
                context.slug = Slug;
                context.destination = e.target.parentNode.children[0].textContent;
                changeListOnCountry(context, e);
                viewCountry(context, Slug);
                updateGraph(context);
            })
        });
    });
    return container;
}