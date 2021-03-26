export default function title(context) {
    const container = document.createElement('div');
    container.className = ('title-inner-container container-fluid m-0 p-1 justify-content-center align-items-center');
    container.textContent = 'COVID-19 Dashboard';
    container.innerHTML = ' COVID-19 Dashboard <div class="reference">Справка: список, который находится справа, также имеет все функции таблицы. Также, например, если хотите просмотреть информацию за последний день - нажмите на "Last day", а после выберите нужный топик для просмотра, например "Recovered".</div>'

    return container;
}