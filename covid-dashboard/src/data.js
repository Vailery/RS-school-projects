const axios = require('axios');

// Список всех доступных текущих маршрутов.
async function defaultInfo() {
    let list = {};
    const url = 'https://api.covid19api.com/';
    const getByDefault = async() => {
        try {
            const response = await axios({
                method: 'get',
                url: `${url}`,
            });
            list = (response.data);
        } catch (e) {
            console.log(e);
        }
    };
    await getByDefault();
    return list;
}

// A summary о новых и общих случаях заболевания, которая в каждой стране обновляется ежедневно.
async function summaryByCountry() {
    let list = {};
    const url = 'https://api.covid19api.com/summary';
    const getSumInfoByCountry = async() => {
        try {
            const response = await axios({
                method: 'get',
                headers: {
                    'X-Access-Token': '5cf9dfd5-3449-485e-b5ae-70a60e997864'
                },
                url: `${url}`,
            });
            list = (response.data);
        } catch (e) {
            console.log(e);
        }
    };
    await getSumInfoByCountry();
    return list;
}

// Все доступные страны и провинции, а также список стран для запросов по каждой стране.
async function getCountries() {
    let list = {};
    const url = 'https://api.covid19api.com/countries';
    const getAllCountries = async() => {
        try {
            const response = await axios({
                method: 'get',
                url: `${url}`,
            });
            list = (response.data);
        } catch (e) {
            console.log(e);
        }
    };
    await getAllCountries();
    return list;
}

// Все cases по типу case для страны из первого зарегистрированного case.
// Cases должны быть одним из: confirmed, recovered, deaths

async function getCountryInfoFromDayOne(slug, cas = 'confirmed') {
    let list = {};
    const url = `https://api.covid19api.com/dayone/country/${slug}/status/${cas}`;
    const getInfoFromDayOne = async() => {
        try {
            const response = await axios({
                method: 'get',
                url: `${url}`,
            });
            list = (response.data);
        } catch (e) {
            console.log(e);
        }
    };
    await getInfoFromDayOne();
    return list;
}

// Все cases по типу case для страны из первого зарегистрированного case.
// Cases должны быть одним из: confirmed, recovered, deaths
async function getDayOneAllStatus(slug) {
    let list = {};
    const url = `https://api.covid19api.com/dayone/country/${slug}`;
    const getDayOneInfoAllStatus = async() => {
        try {
            const response = await axios({
                method: 'get',
                url: `${url}`,
            });
            list = (response.data);
        } catch (e) {
            console.log(e);
        }
    };
    await getDayOneInfoAllStatus();
    return list;
}

// Все cases по типу case для страны из первого записанного case, причем последней записью является текущий счет.
// Cases должны быть одним из: confirmed, recovered, deaths
async function getDayOneAnyStatusLive(slug, cas = 'confirmed') {
    let list = {};
    const url = `https://api.covid19api.com/dayone/country/${slug}/status/${cas}/live`;
    const getDayOneInfoAnyStatusLive = async() => {
        try {
            const response = await axios({
                method: 'get',
                url: `${url}`,
            });
            list = (response.data);
        } catch (e) {
            console.log(e);
        }
    };
    await getDayOneInfoAnyStatusLive();
    return list;
}

//Все cases по типу case для страны из первого зарегистрированного case.
//Cases должны быть одним из: confirmed, recovered, deaths

async function getOneTotal(slug, cas = 'confirmed') {
    let list = {};
    const url = `https://api.covid19api.com/total/dayone/country/${slug}/status/${cas}`;
    const getInfoOneTotal = async() => {
        try {
            const response = await axios({
                method: 'get',
                url: `${url}`,
            });
            list = (response.data);
        } catch (e) {
            console.log(e);
        }
    };
    await getInfoOneTotal();
    return list;
}

//Все cases по типу case для страны из первого зарегистрированного case.
//Cases должны быть одним из: confirmed, recovered, deaths

async function getDayOneTotalAllStatus(slug) {
    let list = {};
    const url = `https://api.covid19api.com/total/dayone/country/${slug}`;
    const getDayOneInfoTotalAllStatus = async() => {
        try {
            const response = await axios({
                method: 'get',
                url: `${url}`,
            });
            list = (response.data);
        } catch (e) {
            console.log(e);
        }
    };
    await getDayOneInfoTotalAllStatus();
    return list;
}

//Все cases по типу case для страны.
//Cases должны быть одним из: confirmed, recovered, deaths

async function getByCountry(slug, cas = 'confirmed', from, to) {
    let list = {};
    const url = `https://api.covid19api.com/country/${slug}/status/${cas}`;
    const getInfoByCountry = async() => {
        try {
            const response = await axios({
                method: 'get',
                url: `${url}`,
                params: {
                    from,
                    to
                },
            });
            list = (response.data);
        } catch (e) {
            console.log(e);
        }
    };
    await getInfoByCountry();
    return list;
}

//Все cases по типу case для страны.
//Cases должны быть одним из: confirmed, recovered, deaths

async function getByCountryAllStatus(slug, from, to) {
    let list = {};
    const url = `https://api.covid19api.com/country/${slug}`;
    const getInfoByCountryAllStatus = async() => {
        try {
            const response = await axios({
                method: 'get',
                url: `${url}`,
                params: {
                    from,
                    to
                },
            });
            list = (response.data);
        } catch (e) {
            console.log(e);
        }
    };
    await getInfoByCountryAllStatus();
    return list;
}

//Все cases по типу case для текущей страны. 
//Cases должны быть одним из: confirmed, recovered, deaths

async function getByCountryLive(slug, cas = 'confirmed', from, to) {
    let list = {};
    const url = `https://api.covid19api.com/country/${slug}/status/${cas}/live`;
    const getInfoByCountryLive = async() => {
        try {
            const response = await axios({
                method: 'get',
                url: `${url}`,
                params: {
                    from,
                    to
                },
            });
            list = (response.data);
        } catch (e) {
            console.log(e);
        }
    };
    await getInfoByCountryLive();
    return list;
}

//Все cases по типу case для страны.
//Cases должны быть одним из: confirmed, recovered, deaths

async function getByCountryTotal(slug, cas = 'confirmed', from, to) {
    let list = {};
    const url = `https://api.covid19api.com/total/country/${slug}`;
    const getInfoByCountryTotal = async() => {
        try {
            const response = await axios({
                method: 'get',
                url: `${url}`,
                params: {
                    from,
                    to
                },
            });
            list = (response.data);
        } catch (e) {
            console.log(e);
        }
    };
    await getInfoByCountryTotal();
    return list;
}

//Все cases по типу case для страны.

async function getByCountryTotalAllStatus(slug) {
    let list = {};
    const url = `https://api.covid19api.com/total/country/${slug}`;
    const getInfoByCountryTotalAllStatus = async() => {
        try {
            const response = await axios({
                method: 'get',
                url: `${url}`,
            });
            list = (response.data);
        } catch (e) {
            console.log(e);
        }
    };
    await getInfoByCountryTotalAllStatus();
    return list;
}

//For Map

async function getDataForMap() {
    let list = {};
    const url = `https://corona.lmao.ninja/v2/countries`;
    const getDataMap = async() => {
        try {
            const response = await axios({
                method: 'get',
                url: `${url}`,
            });
            list = (response.data);
        } catch (e) {
            console.log(e);
        }
    };
    await getDataMap();
    return list;
}

async function getWorldStatistics() {
    let list = {};
    const url = `https://api.covid19api.com/world`;
    const getInfoByCountryTotalAllStatus = async() => {
        try {
            const response = await axios({
                method: 'get',
                url: `${url}`,
            });
            list = (response.data);
        } catch (e) {
            console.log(e);
        }
    };
    await getInfoByCountryTotalAllStatus();
    return list;
}


export {
    getDataForMap,
    getByCountryTotalAllStatus,
    getByCountryTotal,
    getByCountryLive,
    getByCountryAllStatus,
    getByCountry,
    getDayOneTotalAllStatus,
    defaultInfo,
    summaryByCountry,
    getCountries,
    getCountryInfoFromDayOne,
    getDayOneAllStatus,
    getDayOneAnyStatusLive,
    getOneTotal,
    getWorldStatistics,
};