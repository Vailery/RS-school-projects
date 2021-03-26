import 'chartjs-plugin-zoom/dist/chartjs-plugin-zoom';
import 'moment/dist/moment';

let title, colour;

function setTitleAndColour(context) {
    if (context.dataToShow === 'confirmed') {
        title = 'Confirmed';
        colour = 'red';
    } else if (context.dataToShow === 'deaths') {
        title = 'Deaths';
        colour = 'black';
    }
    if (context.dataToShow === 'recovered') {
        title = "Recovered";
        colour = 'green';
    }
}

export function setOptionsForgraphics(context, days, data) {
    setTitleAndColour(context);
    let timeFormat = 'MM/DD/YYYY HH:mm';
    const options = {
        type: 'line',
        fill: false,
        data: {
            labels: days,
            fill: false,
            datasets: [{
                label: title,
                data: data,
                // backgroundColor: 'transparent',
                borderDash: [5, 5],
                borderColor: `${colour}`,
                borderWidth: 1,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    ticks: {
                        display: false
                    },
                    gridLines: false
                }],
                x: {
                    type: 'time',
                    time: {
                        format: timeFormat,
                        tooltipFormat: 'll HH:mm'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
                    },
                },
                y: {
                    scaleLabel: {
                        display: true,
                        labelString: 'value'
                    },
                    ticks: {
                        minTicksLimit: 20
                    },
                }
            },
            pan: {
                enabled: true,
                mode: 'x',
                sensitivity: 0,
                speed: 1,
                threshold: 0
            },
            zoom: {
                enabled: true,
                drag: false,
                mode: 'x',
                speed: 0.05,
                threshold: 0,
                sensitivity: 0,
            }
        },
    };
    return options;
}

export const chart = [];