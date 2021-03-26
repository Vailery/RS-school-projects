function createLegend() {
    const legend = document.createElement('div');
    legend.classList.add('legend-cont');

    const confirmed = document.createElement('div');
    const circleOrange = document.createElement('div');
    const textConfirmed = document.createElement('p');
    confirmed.classList.add('legend-cont2');
    circleOrange.className = ('legend-circle circle-orange');
    textConfirmed.classList.add('legend-text');
    textConfirmed.textContent = 'Confirmed';

    confirmed.appendChild(textConfirmed);
    confirmed.appendChild(circleOrange);
    legend.appendChild(confirmed);

    const death = document.createElement('div');
    const circleRed = document.createElement('div');
    const textDeath = document.createElement('p');
    death.classList.add('legend-cont2');
    circleRed.className = ('legend-circle circle-red');
    textDeath.classList.add('legend-text');
    textDeath.textContent = 'Death';

    death.appendChild(textDeath);
    death.appendChild(circleRed);
    legend.appendChild(death);

    const recoveries = document.createElement('div');
    const circleGreen = document.createElement('div');
    const textRecoveries = document.createElement('p');
    recoveries.classList.add('legend-cont2');
    circleGreen.className = ('legend-circle circle-green');
    textRecoveries.classList.add('legend-text');
    textRecoveries.textContent = 'Recovered';

    recoveries.appendChild(textRecoveries);
    recoveries.appendChild(circleGreen);
    legend.appendChild(recoveries);

    return legend;
}

export default function map(context) {
    const container = document.createElement('div');
    const legend = createLegend();
    const mapContainer = document.createElement('div');
    const row = document.createElement('div');
    const column = document.createElement('div');
    container.className = ('map-container container-fluid');
    row.className = ('row justify-content-center align-items-center gx-5');
    column.className = ('gmap col h3 bg-success border');
    mapContainer.id = 'mapId';
    container.id = 'contID';
    mapContainer.appendChild(legend);
    container.appendChild(mapContainer);
    container.appendChild(row);
    row.appendChild(column);

    return container;
}