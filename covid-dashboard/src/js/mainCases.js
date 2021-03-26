import { summaryByCountry } from '../data.js';

export default function mainCases(context) {
    const { destination } = context;
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const container = document.createElement('div');
    container.className = ('table-container container-fluid p-0');
    const row = document.createElement('div');
    const cDest = document.createElement('div');
    const cCases = document.createElement('div');
    const cDeath = document.createElement('div');
    const cRecov = document.createElement('div');
    row.className = ('row d-flex justify-content-between align-items-center m-0 p-0');
    cDest.className = ('wrap-col col-12 col-md-3 h3 align-items-center p-0 m-0 align-self-stretch');
    cCases.className = ('wrap-col col-12 col-md-3 h3 min-h-100 p-0 m-0 align-self-stretch');
    cDeath.className = ('wrap-col col-12 col-md-3 h3 p-0 m-0 align-self-stretch');
    cRecov.className = ('wrap-col col-12 col-md-3 h3 p-0 m-0 align-self-stretch');

    const cDestTop = document.createElement('div');
    const cDestLow = document.createElement('div');
    cDestTop.className = ('table-where col-6 col-md-12 h3   p-0 m-0');
    cDestLow.className = ('table-date col-6 col-md-12 h3 text-danger p-0 m-0');

    cDestTop.textContent = 'Global';
    cDestLow.textContent = 'Date';

    const cCasesTop = document.createElement('div');
    const cCasesLow = document.createElement('div');
    cCasesTop.className = ('col-6 h3 col-md-12   p-0 m-0');
    cCasesLow.className = ('col-6 table-case col-md-12 h3 text-danger p-0 m-0');

    const cDeathTop = document.createElement('div');
    const cDeathLow = document.createElement('div');
    cDeathTop.className = ('col-6 h3 col-md-12   p-0 m-0');
    cDeathLow.className = ('col-6 table-death col-md-12 h3 text-danger p-0 m-0');

    const cRecovTop = document.createElement('div');
    const cRecovLow = document.createElement('div');
    cRecovTop.className = ('col-6 h3 col-md-12   p-0 m-0');
    cRecovLow.className = ('col-6 table-recov col-md-12 h3 text-danger p-0 m-0');

    cDest.appendChild(cDestTop);
    cDest.appendChild(cDestLow);
    cCases.appendChild(cCasesTop);
    cCases.appendChild(cCasesLow);

    cDeath.appendChild(cDeathTop);
    cDeath.appendChild(cDeathLow);
    cRecov.appendChild(cRecovTop);
    cRecov.appendChild(cRecovLow);

    cCasesTop.textContent = 'Confirmed';
    cCasesLow.textContent = '';

    cDeathTop.textContent = 'Deaths';
    cDeathLow.textContent = '';

    cRecovTop.textContent = 'Recovered';
    cRecovLow.textContent = '';

    container.appendChild(row);
    row.appendChild(cDest);
    row.appendChild(cCases);
    row.appendChild(cDeath);
    row.appendChild(cRecov);

    summaryByCountry().then((data) => {
        const { Message, Countries, Global: { TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed, NewDeaths, NewRecovered } } = data;
        const time = data.Date;
        if (Message === 'Caching in progress' || !data) {
            cCasesLow.classList.add('pos-relative');
            cDeathLow.classList.add('pos-relative');
            cRecovLow.classList.add('pos-relative');
            cDestLow.classList.add('pos-relative');

            cDestLow.appendChild(context.getOnLoadingScreen());
            cCasesLow.appendChild(context.getOnLoadingScreen());
            cDeathLow.appendChild(context.getOnLoadingScreen());
            cRecovLow.appendChild(context.getOnLoadingScreen());
            return;
        } else {
            cDestLow.textContent = new Date(time).toDateString('en-US', options);
            cCasesLow.textContent = TotalConfirmed;
            cDeathLow.textContent = TotalDeaths;
            cRecovLow.textContent = TotalRecovered;
        }
    })

    container.addEventListener('mouseenter', (e) => {
        if (document.querySelector('.menu-container') || document.querySelector('.keyboard-menu-container')) {
            return;
        }
        try {
            if (e.fromElement.tagName === 'DIV') {
                container.appendChild(context.addPopUpMenu());
            };
        } catch (error) {

        }
    });

    container.addEventListener('mouseleave', (e) => {
        try {
            if (e.target.tagName === 'DIV') {
                document.querySelectorAll('.menu-container').forEach((i) => i.remove());
            };
        } catch (error) {

        }
    });

    return container;
}