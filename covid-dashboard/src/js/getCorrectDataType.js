export default function getCorrectDataType(context) {

    const obj = {
        confirmed: 'TotalConfirmed',
        deaths: 'TotalDeaths',
        recovered: 'TotalRecovered',
    };
    return obj[context.dataToShow];
}