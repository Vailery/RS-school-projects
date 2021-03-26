export default function changeFilterControllers(context) {
    return (data) => {
        const obj = {
            All: 'all',
            ['Last day']: 'day',
            Total: 'total',
            ['100k people']: 'per',
        };
        const obj1 = {
            All: 'optAllLastDay',
            ['Last day']: 'optAllLastDay',
            Total: 'optTotalPer100',
            ['100k people']: 'optTotalPer100',
        }
        context[obj1[data]] = obj[data];
    }
}