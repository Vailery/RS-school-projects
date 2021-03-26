export default function list(context) {
    const container = document.createElement('div');
    const row = document.createElement('div');
    const column = document.createElement('div');
    container.className = ('list-container container-fluid m-0 p-0   align-self-stretch');
    row.className = ('row list-row justify-content-center align-items-center m-0 p-0 align-self-stretch');
    container.appendChild(row);
    row.appendChild(context.getSearchField());
    row.appendChild(context.getInfoForList());

    return container;
}